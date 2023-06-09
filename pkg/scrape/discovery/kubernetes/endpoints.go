// Copyright 2016 The Prometheus Authors
// Copyright 2021 The Pyroscope Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package kubernetes

import (
	"context"
	"fmt"
	"net"
	"strconv"

	"github.com/sirupsen/logrus"
	apiv1 "k8s.io/api/core/v1"
	"k8s.io/client-go/tools/cache"
	"k8s.io/client-go/util/workqueue"

	"github.com/pyroscope-io/pyroscope/pkg/scrape/discovery/targetgroup"
	"github.com/pyroscope-io/pyroscope/pkg/scrape/model"
)

// revive:disable:cognitive-complexity preserve original implementation

var (
	epAddCount    = eventCount.WithLabelValues("endpoints", "add")
	epUpdateCount = eventCount.WithLabelValues("endpoints", "update")
	epDeleteCount = eventCount.WithLabelValues("endpoints", "delete")
)

// Endpoints discovers new endpoint targets.
type Endpoints struct {
	logger logrus.FieldLogger

	endpointsInf cache.SharedInformer
	serviceInf   cache.SharedInformer
	podInf       cache.SharedInformer

	podStore       cache.Store
	endpointsStore cache.Store
	serviceStore   cache.Store

	queue *workqueue.Type
}

// NewEndpoints returns a new endpoints discovery.
func NewEndpoints(l logrus.FieldLogger, svc, eps, pod cache.SharedInformer) *Endpoints {
	e := &Endpoints{
		logger:         l,
		endpointsInf:   eps,
		endpointsStore: eps.GetStore(),
		serviceInf:     svc,
		serviceStore:   svc.GetStore(),
		podInf:         pod,
		podStore:       pod.GetStore(),
		queue:          workqueue.NewNamed("endpoints"),
	}

	e.endpointsInf.AddEventHandler(cache.ResourceEventHandlerFuncs{
		AddFunc: func(o interface{}) {
			epAddCount.Inc()
			e.enqueue(o)
		},
		UpdateFunc: func(_, o interface{}) {
			epUpdateCount.Inc()
			e.enqueue(o)
		},
		DeleteFunc: func(o interface{}) {
			epDeleteCount.Inc()
			e.enqueue(o)
		},
	})

	serviceUpdate := func(o interface{}) {
		svc, err := convertToService(o)
		if err != nil {
			e.logger.WithError(err).Error("converting to Service object failed")
			return
		}

		ep := &apiv1.Endpoints{}
		ep.Namespace = svc.Namespace
		ep.Name = svc.Name
		obj, exists, err := e.endpointsStore.Get(ep)
		if exists && err == nil {
			e.enqueue(obj.(*apiv1.Endpoints))
		}

		if err != nil {
			e.logger.WithError(err).Error("retrieving endpoints failed")
		}
	}
	e.serviceInf.AddEventHandler(cache.ResourceEventHandlerFuncs{
		// TODO(fabxc): potentially remove add and delete event handlers. Those should
		// be triggered via the endpoint handlers already.
		AddFunc: func(o interface{}) {
			svcAddCount.Inc()
			serviceUpdate(o)
		},
		UpdateFunc: func(_, o interface{}) {
			svcUpdateCount.Inc()
			serviceUpdate(o)
		},
		DeleteFunc: func(o interface{}) {
			svcDeleteCount.Inc()
			serviceUpdate(o)
		},
	})

	return e
}

func (e *Endpoints) enqueue(obj interface{}) {
	key, err := cache.DeletionHandlingMetaNamespaceKeyFunc(obj)
	if err != nil {
		return
	}

	e.queue.Add(key)
}

// Run implements the Discoverer interface.
func (e *Endpoints) Run(ctx context.Context, ch chan<- []*targetgroup.Group) {
	defer e.queue.ShutDown()

	if !cache.WaitForCacheSync(ctx.Done(), e.endpointsInf.HasSynced, e.serviceInf.HasSynced, e.podInf.HasSynced) {
		if ctx.Err() != context.Canceled {
			e.logger.Error("endpoints informer unable to sync cache")
		}
		return
	}

	go func() {
		for {
			if !e.process(ctx, ch) {
				return
			}
		}
	}()

	// Block until the target provider is explicitly canceled.
	<-ctx.Done()
}

func (e *Endpoints) process(ctx context.Context, ch chan<- []*targetgroup.Group) bool {
	keyObj, quit := e.queue.Get()
	if quit {
		return false
	}
	defer e.queue.Done(keyObj)
	key := keyObj.(string)
	logger := e.logger.WithField("key", key)
	namespace, name, err := cache.SplitMetaNamespaceKey(key)
	if err != nil {
		logger.WithError(err).Error("splitting key")
		return true
	}

	o, exists, err := e.endpointsStore.GetByKey(key)
	if err != nil {
		logger.WithError(err).Error("getting object from store")
		return true
	}
	if !exists {
		send(ctx, ch, &targetgroup.Group{Source: endpointsSourceFromNamespaceAndName(namespace, name)})
		return true
	}
	eps, err := convertToEndpoints(o)
	if err != nil {
		logger.WithError(err).Error("converting to Endpoints object")
		return true
	}
	send(ctx, ch, e.buildEndpoints(eps))
	return true
}

func convertToEndpoints(o interface{}) (*apiv1.Endpoints, error) {
	endpoints, ok := o.(*apiv1.Endpoints)
	if ok {
		return endpoints, nil
	}

	return nil, fmt.Errorf("received unexpected object: %v", o)
}

func endpointsSource(ep *apiv1.Endpoints) string {
	return endpointsSourceFromNamespaceAndName(ep.Namespace, ep.Name)
}

func endpointsSourceFromNamespaceAndName(namespace, name string) string {
	return "endpoints/" + namespace + "/" + name
}

const (
	endpointsLabelPrefix           = metaLabelPrefix + "endpoints_label_"
	endpointsLabelPresentPrefix    = metaLabelPrefix + "endpoints_labelpresent_"
	endpointsNameLabel             = metaLabelPrefix + "endpoints_name"
	endpointNodeName               = metaLabelPrefix + "endpoint_node_name"
	endpointHostname               = metaLabelPrefix + "endpoint_hostname"
	endpointReadyLabel             = metaLabelPrefix + "endpoint_ready"
	endpointPortNameLabel          = metaLabelPrefix + "endpoint_port_name"
	endpointPortProtocolLabel      = metaLabelPrefix + "endpoint_port_protocol"
	endpointAddressTargetKindLabel = metaLabelPrefix + "endpoint_address_target_kind"
	endpointAddressTargetNameLabel = metaLabelPrefix + "endpoint_address_target_name"
)

func (e *Endpoints) buildEndpoints(eps *apiv1.Endpoints) *targetgroup.Group {
	tg := &targetgroup.Group{
		Source: endpointsSource(eps),
	}
	tg.Labels = model.LabelSet{
		namespaceLabel:     lv(eps.Namespace),
		endpointsNameLabel: lv(eps.Name),
	}
	e.addServiceLabels(eps.Namespace, eps.Name, tg)
	// Add endpoints labels metadata.
	for k, v := range eps.Labels {
		ln := sanitizeLabelName(k)
		tg.Labels[model.LabelName(endpointsLabelPrefix+ln)] = lv(v)
		tg.Labels[model.LabelName(endpointsLabelPresentPrefix+ln)] = presentValue
	}

	type podEntry struct {
		pod          *apiv1.Pod
		servicePorts []apiv1.EndpointPort
	}
	seenPods := map[string]*podEntry{}

	add := func(addr apiv1.EndpointAddress, port apiv1.EndpointPort, ready string) {
		a := net.JoinHostPort(addr.IP, strconv.FormatUint(uint64(port.Port), 10))

		target := model.LabelSet{
			model.AddressLabel:        lv(a),
			endpointPortNameLabel:     lv(port.Name),
			endpointPortProtocolLabel: lv(string(port.Protocol)),
			endpointReadyLabel:        lv(ready),
		}

		if addr.TargetRef != nil {
			target[model.LabelName(endpointAddressTargetKindLabel)] = lv(addr.TargetRef.Kind)
			target[model.LabelName(endpointAddressTargetNameLabel)] = lv(addr.TargetRef.Name)
		}

		if addr.NodeName != nil {
			target[model.LabelName(endpointNodeName)] = lv(*addr.NodeName)
		}
		if addr.Hostname != "" {
			target[model.LabelName(endpointHostname)] = lv(addr.Hostname)
		}

		pod := e.resolvePodRef(addr.TargetRef)
		if pod == nil {
			// This target is not a Pod, so don't continue with Pod specific logic.
			tg.Targets = append(tg.Targets, target)
			return
		}
		s := pod.Namespace + "/" + pod.Name

		sp, ok := seenPods[s]
		if !ok {
			sp = &podEntry{pod: pod}
			seenPods[s] = sp
		}

		// Attach standard pod labels.
		target = target.Merge(podLabels(pod))

		// Attach potential container port labels matching the endpoint port.
		for _, c := range pod.Spec.Containers {
			for _, cport := range c.Ports {
				if port.Port == cport.ContainerPort {
					ports := strconv.FormatUint(uint64(port.Port), 10)

					target[podContainerNameLabel] = lv(c.Name)
					target[podContainerPortNameLabel] = lv(cport.Name)
					target[podContainerPortNumberLabel] = lv(ports)
					target[podContainerPortProtocolLabel] = lv(string(port.Protocol))
					break
				}
			}
		}

		// Add service port so we know that we have already generated a target
		// for it.
		sp.servicePorts = append(sp.servicePorts, port)
		tg.Targets = append(tg.Targets, target)
	}

	for _, ss := range eps.Subsets {
		for _, port := range ss.Ports {
			for _, addr := range ss.Addresses {
				add(addr, port, "true")
			}
			// Although this generates the same target again, as it was generated in
			// the loop above, it causes the ready meta label to be overridden.
			for _, addr := range ss.NotReadyAddresses {
				add(addr, port, "false")
			}
		}
	}

	v := eps.Labels[apiv1.EndpointsOverCapacity]
	if v == "truncated" {
		e.logger.WithField("endpoint", eps.Name).
			Warn("number of endpoints in one Endpoints object exceeds 1000 and has been truncated, please use \"role: endpointslice\" instead")
	}
	if v == "warning" {
		e.logger.WithField("endpoint", eps.Name).
			Warn("number of endpoints in one Endpoints object exceeds 1000, please use \"role: endpointslice\" instead")
	}

	// For all seen pods, check all container ports. If they were not covered
	// by one of the service endpoints, generate targets for them.
	for _, pe := range seenPods {
		for _, c := range pe.pod.Spec.Containers {
			for _, cport := range c.Ports {
				hasSeenPort := func() bool {
					for _, eport := range pe.servicePorts {
						if cport.ContainerPort == eport.Port {
							return true
						}
					}
					return false
				}
				if hasSeenPort() {
					continue
				}

				a := net.JoinHostPort(pe.pod.Status.PodIP, strconv.FormatUint(uint64(cport.ContainerPort), 10))
				ports := strconv.FormatUint(uint64(cport.ContainerPort), 10)

				target := model.LabelSet{
					model.AddressLabel:            lv(a),
					podContainerNameLabel:         lv(c.Name),
					podContainerPortNameLabel:     lv(cport.Name),
					podContainerPortNumberLabel:   lv(ports),
					podContainerPortProtocolLabel: lv(string(cport.Protocol)),
				}
				tg.Targets = append(tg.Targets, target.Merge(podLabels(pe.pod)))
			}
		}
	}

	return tg
}

func (e *Endpoints) resolvePodRef(ref *apiv1.ObjectReference) *apiv1.Pod {
	if ref == nil || ref.Kind != "Pod" {
		return nil
	}
	p := &apiv1.Pod{}
	p.Namespace = ref.Namespace
	p.Name = ref.Name

	obj, exists, err := e.podStore.Get(p)
	if err != nil {
		e.logger.WithError(err).Error("resolving pod")
		return nil
	}
	if !exists {
		return nil
	}
	return obj.(*apiv1.Pod)
}

func (e *Endpoints) addServiceLabels(ns, name string, tg *targetgroup.Group) {
	svc := &apiv1.Service{}
	svc.Namespace = ns
	svc.Name = name

	obj, exists, err := e.serviceStore.Get(svc)
	if err != nil {
		e.logger.WithError(err).Error("retrieving service")
		return
	}
	if !exists {
		return
	}
	svc = obj.(*apiv1.Service)

	tg.Labels = tg.Labels.Merge(serviceLabels(svc))
}

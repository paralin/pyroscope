// Code generated by MockGen. DO NOT EDIT.
// Source: github.com/pyroscope-io/pyroscope/pkg/api (interfaces: APIKeyService)

// Package mocks is a generated GoMock package.
package mocks

import (
	context "context"
	reflect "reflect"

	gomock "github.com/golang/mock/gomock"
	model "github.com/pyroscope-io/pyroscope/pkg/model"
)

// MockAPIKeyService is a mock of APIKeyService interface.
type MockAPIKeyService struct {
	ctrl     *gomock.Controller
	recorder *MockAPIKeyServiceMockRecorder
}

// MockAPIKeyServiceMockRecorder is the mock recorder for MockAPIKeyService.
type MockAPIKeyServiceMockRecorder struct {
	mock *MockAPIKeyService
}

// NewMockAPIKeyService creates a new mock instance.
func NewMockAPIKeyService(ctrl *gomock.Controller) *MockAPIKeyService {
	mock := &MockAPIKeyService{ctrl: ctrl}
	mock.recorder = &MockAPIKeyServiceMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use.
func (m *MockAPIKeyService) EXPECT() *MockAPIKeyServiceMockRecorder {
	return m.recorder
}

// CreateAPIKey mocks base method.
func (m *MockAPIKeyService) CreateAPIKey(arg0 context.Context, arg1 model.CreateAPIKeyParams) (model.APIKey, string, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "CreateAPIKey", arg0, arg1)
	ret0, _ := ret[0].(model.APIKey)
	ret1, _ := ret[1].(string)
	ret2, _ := ret[2].(error)
	return ret0, ret1, ret2
}

// CreateAPIKey indicates an expected call of CreateAPIKey.
func (mr *MockAPIKeyServiceMockRecorder) CreateAPIKey(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "CreateAPIKey", reflect.TypeOf((*MockAPIKeyService)(nil).CreateAPIKey), arg0, arg1)
}

// DeleteAPIKeyByID mocks base method.
func (m *MockAPIKeyService) DeleteAPIKeyByID(arg0 context.Context, arg1 uint) error {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "DeleteAPIKeyByID", arg0, arg1)
	ret0, _ := ret[0].(error)
	return ret0
}

// DeleteAPIKeyByID indicates an expected call of DeleteAPIKeyByID.
func (mr *MockAPIKeyServiceMockRecorder) DeleteAPIKeyByID(arg0, arg1 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "DeleteAPIKeyByID", reflect.TypeOf((*MockAPIKeyService)(nil).DeleteAPIKeyByID), arg0, arg1)
}

// GetAllAPIKeys mocks base method.
func (m *MockAPIKeyService) GetAllAPIKeys(arg0 context.Context) ([]model.APIKey, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "GetAllAPIKeys", arg0)
	ret0, _ := ret[0].([]model.APIKey)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// GetAllAPIKeys indicates an expected call of GetAllAPIKeys.
func (mr *MockAPIKeyServiceMockRecorder) GetAllAPIKeys(arg0 interface{}) *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "GetAllAPIKeys", reflect.TypeOf((*MockAPIKeyService)(nil).GetAllAPIKeys), arg0)
}

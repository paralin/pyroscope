<p align="center"><img alt="Pyroscope" src="https://user-images.githubusercontent.com/662636/105129037-11334180-5a99-11eb-8951-1d4aaaed50de.png" width="500px"/></p>

### What is Pyroscope?

Pyroscope is an open source continuous profiling platform. It will help you:

* Find performance issues and bottlenecks in your code
* Use high-cardinality tags/labels to analyze your application
* Resolve issues with high CPU utilization
* Track down memory leaks
* Understand the call tree of your application
* Auto-instrument your code to link profiling data to traces

## Features

* Minimal CPU overhead
* Efficient compression, low disk space requirements
* Can handle high-cardinality tags/labels
* Calculate the performance "diff" between various tags/labels and time periods
* Can store years of profiling data from multiple applications
* Advanced analysis UI

## Credits

Pyroscope is possible thanks to the excellent work of many people, including but not limited to:

* Brendan Gregg — inventor of Flame Graphs
* Julia Evans — creator of rbspy — sampling profiler for Ruby
* Vladimir Agafonkin — creator of flamebearer — fast flamegraph renderer
* Ben Frederickson — creator of py-spy — sampling profiler for Python
* Adam Saponara — creator of phpspy — sampling profiler for PHP
* Alexei Starovoitov, Brendan Gregg, and many others who made BPF based profiling in Linux kernel possible
* Jamie Wong — creator of speedscope — interactive flamegraph visualizer

## Fork

Grafana Labs has acquired Pyroscope and re-licensed it from Apache-2.0 to AGPL-3.0.

This is a fork of the [commit just before] the license was changed to AGPL.

[commit just before]: https://github.com/grafana/pyroscope/commit/bd6225e4437c6de4c2ffb24d8fda0a84dc945fc1

### Corresponding client versions

These are the client versions corresponding to this fork:

 - [pyroscope-golang]: v0.7.0
 
 [pyroscope-golang]: https://github.com/paralin/pyroscope-golang

# logagent-tcp-input

Plugin to receive log data via TCP and send parsed JSON back to the client. 

1. Install logagent 2.x 

```
npm i sematext/logagent-js#2.x -g
```

2. Install this plugin 
```
npm i megastef/logagent-tcp-input -g 
```
3. configure logagent 

```
# Global options
options:
  includeOriginalLine: false

input:
  stdin: true
  tcp: 
    module: logagent-tcp-input
    port: 45900
    bindAddress: 0.0.0.0
    sourceName: tcpTest
output:
  # print parsed logs in YAML format to stdout   
  stdout: yaml 
```

4. Start logagent

```
logagent --config myconfig.yml
```

5. Ship logs to the tcp port and receive parsed JSON

```
cat ../access.log |  nc localhost 45900
``` 

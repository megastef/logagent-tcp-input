# logagent-tcp-input

Plugin to receive log data via TCP and send parsed JSON back to the client. 

1. Install logagent 2.x 

```
npm i -g @sematext/logagent
```

2. Install this plugin 
```
npm i -g @sematext/logagent-tcp-input  
```
3. configure logagent 

```
input:
  tcp: 
    module: @sematext/logagent-tcp-input
    port: 45900
    bindAddress: 0.0.0.0
    sourceName: tcpTest
output:
  elasticsearch:
    url: http://localhost:9200
    index: logs
```

4. Start logagent

```
logagent --config myconfig.yml
```

5. Ship logs to the tcp port and receive parsed JSON in Elasticsearch

```
tail -F  ../access.log |  nc servername 45900
``` 

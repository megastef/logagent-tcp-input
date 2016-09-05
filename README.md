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
  # print parsed logs in YAML format to stdout if supress is set false    
  stdout: yaml # use 'pretty' for pretty json and 'ldjson' for line delimited json (default)
```

4. Start logagent

```
logagent --config myconfig.yml
```

5. Ship logs to the tcp port and receive parsed JSON

```
cat ../access.log |  nc localhost 45900
{"logSource":"tcpTest","_type":"access_log_combined","client_ip":"::1","remote_id":"-","user":"-","method":"OPTIONS","path":"* HTTP/1.0","status_code":200,"size":125,"referer":"-","user_agent":"Apache/2.4.7 (Ubuntu) OpenSSL/1.0.1f (internal dummy connection)","@timestamp":"2016-04-03T06:25:08.000Z","message":"OPTIONS * HTTP/1.0"}
``` 

var InputTCP = require('./index.js')
var net = require('net')
// simulate LA plugin loading
function test () {
  var EE = require('events').EventEmitter
  // Logagent loads the configfrom a yaml file
  // we simply pass a JSON object
  var config = {
    configFile: {
      input: {
        tcp: {
          port: 4546,
          bindAddress: '127.0.0.1',
          sourceName: 'test',
          debug: true
        }
      }
    }
  }
  // create and start the plugin - normally done by logagent ...
  var plugin = new InputTCP(config, new EE())
  plugin.start()
  // simulate a client
  setTimeout(function () {
    var client = new net.Socket()
    client.connect(config.configFile.input.tcp.port, '127.0.0.1', function () {
      console.log('client connected')
      client.write('Hello, server!')
      client.end()
    })
  }, 1000)
}

if (require.main === module) {
  test()
}

module.exports = function(env){
  /*
  var options = {
    cert: env.ssl.cert,
    key: env.ssl.key
  };
  */

  var app = require('express')();
  var server = require('http').Server(app);
  var io = require('socket.io')(server);

  var port = env.port;

  require('./handlers/express-handlers.js')({app: app, env:env});

  return {
    listen: function(cb){
      return server.listen(port, cb);
    }
  };
};

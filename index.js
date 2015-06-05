var app = require('./server/app');
var node_env = process.env['NODE_ENV'] || 'development';
var env = require('./env')[node_env];

app(env).listen(function(err){
  if(err){
    throw err;
  } else {
    console.log('Server listening on port', env.port);
  }
});

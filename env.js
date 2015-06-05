var fs = require('fs');

module.exports = {
  development: {
    port: 9000,
    mongo: 'mongodb:localhost/sta',
    /*ssl: {
      cert: fs.readFileSync(__dirname + '/sta.pem'),
      key: fs.readFileSync(__dirname + '/stakey.pem')
    }*/
  }
};

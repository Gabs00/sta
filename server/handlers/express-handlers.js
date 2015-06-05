var url = require('url');

module.exports = function(ops){
  var app = ops.app;
  var env = ops.env;

  app.get('/*', function(req, res){
    var page = url.parse(req.url).pathname;
    console.log(page);

    res.sendFile(page, { root: 'client/' });
  });
};

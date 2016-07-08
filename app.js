var debug = require('debug')('http'),
    http = require('http'),
    name = 'My App';

debug('booting %s', name);

http.createServer(function(req, res){
  debug(req.method + ' ' + req.url);
  res.end('hello\n also ' +process.env.foo);
}).listen(8080, function(){
  debug('listening. port 8080' );
});

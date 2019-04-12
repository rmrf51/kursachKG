// NODE
var fs = require('fs');
var http = require('http');
var server = http.createServer( function(req, res) {
  res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
  var myReadShort = fs.createReadStream('index.html', 'utf8');
  myReadShort.pipe(res);
});

server.listen(3000, '127.0.0.1');
console.log("port 3000");




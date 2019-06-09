const http = require('http');

http.createServer(function (req, res) {
  console.log(`request comes from ${req.url}`)

  res.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888'
  });
  res.end('Hello Worlddd') ;
}).listen(8887);

console.log('Server running at http://127.0.0.1:8887/');
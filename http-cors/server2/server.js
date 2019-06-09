const http = require('http');

http.createServer(function (req, res) {
  console.log(`request comes from ${req.url}`)

  res.writeHead(200, {
    'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, Delete',
    'Access-Control-Max-Age': '10'
  });
  res.end('Hello World');
}).listen(8887);

console.log('Server running at http://127.0.0.1:8887/');
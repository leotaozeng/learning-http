const http = require('http');

http.createServer((req, res) => {
  console.log(`req comes from ${req.headers.host}`)

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
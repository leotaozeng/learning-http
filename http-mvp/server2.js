const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain',
    'Access-Control-Allow-Origin': 'http://localhost:8090/'
  });
  response.end('Hello World');
}).listen(8082);

console.log('Server running at http://127.0.0.1:8082/');
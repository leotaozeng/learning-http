const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });
  response.end('Hello World');
}).listen(8887);

console.log('Server is running at http://127.0.0.1:8887/');
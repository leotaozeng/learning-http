const http = require('http');

http.createServer((request, response) => {
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, Delete',
    'Access-Control-Max-Age': '1000'
  });
  response.end('Hello World');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
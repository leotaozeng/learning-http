const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer((request, response) => {
  if (request.url === '/') {
    const html = fs.readFileSync(path.join(__dirname, 'test.html'), 'utf8');

    response.writeHead(200, {
      'Content-Type': 'text/html',
      // * is a universal thing
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    response.end(html);
  }

  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      'Cache-Control': 'no-cache, max-age=31536000',
      'Last-Modified': '123',
      'Etag': '777'
    });
    response.end('console.log("Script Loaded Third")');
  }

}).listen(8888);

console.log('Server is running at http://127.0.0.1:8888/');
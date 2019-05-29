const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  var data = fs.readFileSync('file.txt');

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World');
}).listen(8884);

console.log('Server running at http://127.0.0.1:8884/'); 
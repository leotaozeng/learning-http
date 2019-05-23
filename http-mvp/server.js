const http = require('http');
const fs = require('fs');
const path = require('path')

http.createServer(function (request, response) {
  const html = fs.readFileSync(path.join(__dirname, 'test.html'), 'utf8', (err, data) => {
    console.log("err->", err);
    console.log("data", data);
  });

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(html);

}).listen(8090);

console.log('Server running at http://127.0.0.1:8090/');
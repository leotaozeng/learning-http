const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  const html = fs.readFileSync('index.html', 'utf8');

  res.writeHead(200, {
    'Content-Type': 'text/html'
  });
  res.end(html);
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
const http = require('http');
const fs = require('fs');
const zlib = require('zlib')

// 一个简单的 HTTP 服务器
http.createServer((request, response) => {
  const html = fs.readFileSync('index.html');

  response.writeHead(200, {
    'Content-Type': 'text/html',
    'Content-Encoding': 'gzip'
  });
  response.end(zlib.gzipSync(html));
}).listen(8885);

console.log('Server running at http://127.0.0.1:8885/'); 
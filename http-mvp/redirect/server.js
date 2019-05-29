const http = require('http');

// 一个简单的 HTTP 服务器
http.createServer((request, response) => {
  console.log(`request comes from ${request.url}`);

  if (request.url === '/') {
    // Moved Permanently，谨慎使用
    response.writeHead(301, {
      'Location': '/new'
    });
    response.end();
  }

  if (request.url === '/new') {
    response.writeHead(200, {
      'Content-Type': 'text/html'
    });
    response.end('<h1>This is the Content</h1>');
  }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
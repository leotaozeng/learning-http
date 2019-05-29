const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
  console.log('request come', request.url)

  const host = request.headers.host
  console.log(host)
  if (request.url === '/') {
    const html = fs.readFileSync('index.html', 'utf8');

    if (host === 'test.com:8888') {
      console.log(1)
      response.writeHead(200, {
        'Content-Type': 'text/html',
        // HttpOnly: Protecting Cookies
        'Set-Cookie': ['id=123; max-age=2', 'abc=456']
      });
    }

    response.end(html);
  }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
// 引用两个系统模块
const http = require('http');
const fs = require('fs');

const wait = (seconds) => {
  return new Promise((resolve, reject) => setTimeout(() => resolve(), seconds * 1000))
}

// 一个简单的 HTTP 服务器
// createServer 是异步操作
http.createServer((req, res) => {
  if (req.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8')

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(html)
  }

  if (req.url === '/data') {
    res.writeHead(200, {
      // max-age 是给浏览器用的，s-maxage 是给代理缓存用的
      // private 是只允许浏览器进行缓存操作
      // 'Cache-Control': 'max-age=5, s-maxage=20'
      'Cache-Control': 's-maxage=200',
      'Vary': 'X-Test-Cache'
    })
    wait(2).then(() => res.end('success'))
  }
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
// 引用一个系统模块
const http = require('http');
const fs = require('fs');

// fs.readFile('test.html', (err, data) => {
//   console.log(data.toString())
// })

// 一个简单的 HTTP 服务器
// createServer 是异步操作
const server = http.createServer((request, response) => {
  console.log(request.url)
  const file_name = './accept' + request.url

  // 异步操作
  fs.readFile(file_name, (err, data) => {
    if (err) {
      response.write('404');
    } else {
      response.write(data);
    }

    response.end();
  })
})

server.listen(8080)

console.log('Server running at http://127.0.0.1:8080/');
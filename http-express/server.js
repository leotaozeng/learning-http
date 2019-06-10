const https = require('https')
const fs = require('fs');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Hello HTTPS!</h1>'))

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app).listen(port, () => {
  console.log(`Server is running at http://127.0.0.1:${port}/`);
})
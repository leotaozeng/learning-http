const https = require('https')
const app = express()

app.get('')

https.createServer({}, app).listen(8888, () => {
  console.log('Server running at http://127.0.0.1:8888/');
})
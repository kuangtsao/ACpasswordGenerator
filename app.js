// 定義與 express 有關變數
const express = require('express')
const app = express()
const port = 3000


// localhost:3000
app.get('/', (req, res) => {
  res.send('This will be a random password generator')
})

app.listen(port, () => {
  console.log(`The server will be start at localhost:${port}`)
})

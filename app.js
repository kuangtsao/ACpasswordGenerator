// 定義與 express 有關變數
const express = require('express')
const app = express()
const port = 3000

// 載入 generate_password
const generatePassword = require('./generate_password')

// 定義與 express-handlebars 有關變數
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// body-parser 載入
app.use(express.urlencoded({ extended: true }))

// localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const password = generatePassword(req.body)
  res.render('index', { password })
})

app.listen(port, () => {
  console.log(`The server will be start at localhost:${port}`)
})

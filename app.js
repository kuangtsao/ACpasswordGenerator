// 定義與 express 有關變數
const express = require('express')
const app = express()
const port = 3000

// 定義與 express-handlebars 有關變數
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// localhost:3000
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`The server will be start at localhost:${port}`)
})

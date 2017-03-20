var express = require('express')
var app = express()
var stylus = require('express-stylus')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs')


app.get('/', (req, res)=>{
  res.render('index')
})

app.use(stylus({
  src: './stylus',
  dest: './app',
  debug: true,
  force: true
}))
app.use(express.static('./app'))

app.get('/*', (req, res)=>{
  page = req.url.substring(1)
  res.render(page)
})

app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

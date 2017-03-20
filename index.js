var express = require('express')
var app = express()
var stylus = require('express-stylus')


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

app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

var express = require('express')
var app = express()
var stylus = require('express-stylus')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// database-------------
var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1:27017/leadlearn';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
//----------------------
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

app.post('/addUser', (req,res)=>{
  // console.log(req.body);
  console.log(require('./dbs/addUser')(req.body));
  res.redirect('/registrationSuccess');
})

app.post('/login', (req,res)=>{
  console.log(req.body);
  res.redirect('/login');
})

app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

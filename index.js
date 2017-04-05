var express = require('express')
var app = express()
var stylus = require('express-stylus')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
var global = require('./global')
var morgan      = require('morgan');
// database-------------
var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1:27017/leadlearn';
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var user = require('./dbs/userSchema')
//----------------------

// cookies--------------
var cookieParser = require('cookie-parser')
app.use(cookieParser('maybehere'))
//----------------------

// ejs templating
app.set('view engine', 'ejs')
// use morgan to log requests to the console
app.use(morgan('dev'));



app.get('/', (req, res)=>{
  res.render('index')
})

app.use(stylus({
  src: './src',
  dest: './src',
  debug: true,
  force: true
}))
app.use(express.static('./app'))

app.get('/getQuestion', (req,res)=>{
  require('./dbs/getQuestion').renderQuestion(req, res);
})

app.get('/dev', (req,res)=>{
  console.log(global);
  res.render('dev', { global: JSON.stringify(global) })
})

// app.get('/*', (req, res)=>{ var loggedIn = 0
//   page = req.url.substring(1)
//   if(req.signedCookies.session) loggedIn = 1
//   res.render(page, {loggedIn, err: 0})
// })

app.post('/register', (req,res)=>{
  console.log(require('./dbs/addUser')(req.body));
  res.redirect('/registrationSuccess');
})

app.post('/addQuestion', (req,res)=>{
  question = {
    query: req.body.query,
    options: req.body.options.split('||'),
    correctOp: req.body.correctOp,
    tags: req.body.tags.split(' ')
  }
  console.log(question);
  console.log(require('./dbs/addQuestion')(question));
  res.redirect('/addQuestion');
})

app.post('/login', (req,res)=>{
  require('./login').login(req, res);
})

app.post('/logout', (req,res)=>{
  require('./logout').logout(req, res);
})


app.post('/getUsername', (req,res)=>{
  require('./dbs/getUsername').getUsername(req, res);
  // res.send('yo')
})

app.get('/*', (req, res)=>{
  res.render('index')
})

app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

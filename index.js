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
var user = require('./dbs/userSchema')
//----------------------

// cookies--------------
var cookieParser = require('cookie-parser')
app.use(cookieParser('maybehere'))
//----------------------

app.set('view engine', 'ejs')


app.get('/', (req, res)=>{ var loggedIn = 0
  console.log('Signed Cookies: ', req.signedCookies)
  if(req.signedCookies.session) loggedIn = 1
  res.render('index', { loggedIn })
})

app.use(stylus({
  src: './stylus',
  dest: './app',
  debug: true,
  force: true
}))
app.use(express.static('./app'))

app.get('/logout', (req,res)=>{
  res.clearCookie('session', {path:'/'})
  res.render('login', {loggedIn: 0, err: 0})
})

app.get('/*', (req, res)=>{ var loggedIn = 0
  page = req.url.substring(1)
  if(req.signedCookies.session) loggedIn = 1
  res.render(page, {loggedIn, err: 0})
})

app.post('/register', (req,res)=>{
  console.log(require('./dbs/addUser')(req.body));
  res.redirect('/registrationSuccess');
})

app.post('/login', (req,res)=>{
  require('./login').login(req, res);
})



app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

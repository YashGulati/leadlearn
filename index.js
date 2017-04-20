var express = require('express')
var app = express()
var stylus = require('express-stylus')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
var morgan      = require('morgan');
var jwt = require('jsonwebtoken')
// database and email verification-------------
var mongoose = require('mongoose')
var mongoDB = 'mongodb://127.0.0.1:27017/leadlearn';
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
var user = require('./dbs/userSchema');
var nev = require('email-verification')(mongoose);
mongoose.connect(mongoDB);
// ----------------------
// email verification configuration ---------------
// nev.configure({
//     verificationURL: 'http://myawesomewebsite.com/email-verification/${URL}',
//     persistentUserModel: user,
//     tempUserCollection: 'myawesomewebsite_tempusers',
//
//     transportOptions: {
//         service: 'Gmail',
//         auth: {
//             user: 'a',
//             pass: 'a'
//         }
//     },
//     verifyMailOptions: {
//         from: 'Do Not Reply <myawesomeemail_do_not_reply@gmail.com>',
//         subject: 'Please confirm account',
//         html: 'Click the following link to confirm your account:</p><p>${URL}</p>',
//         text: 'Please confirm your account by clicking the following link: ${URL}'
//     }
// }, function(error, options){
// });
// nev.generateTempUserModel(user);
//----------------------------------------------

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

app.use(require('./server/protected-routes'));
app.use(require('./server/user-routes'));

app.get('/getQuestion', (req,res)=>{
  require('./dbs/getQuestion').renderQuestion(req, res);
})

app.get('/dev', (req,res)=>{
  console.log(global);
  res.render('dev', { global: JSON.stringify(global) })
})

app.post('/register', (req,res)=>{
  console.log(require('./dbs/addUser')(req.body));
  res.redirect('/registrationSuccess');
})

app.post('/addQuestion', (req,res)=>{
  console.log(req.body);
  var data = Object.keys(req.body)[0];
  console.log(data);
  var obj = JSON.parse(data);
  console.log(obj);
  question = {
    query: obj.query,
    options: obj.options.split('||'),
    correctOp: obj.correctOp,
    tags: obj.tags.split(' ')
  }
  console.log(question);
  console.log(require('./dbs/addQuestion')(question));
  res.redirect('/addQuestion');
})

app.get('/*', (req, res)=>{
  res.render('index')
})

app.listen(80, ()=>{
  console.log("Listening on port 80...")
})

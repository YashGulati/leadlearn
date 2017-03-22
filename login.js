var user = require('./dbs/userSchema')
var cookies = require('./cookies')
var global = require('./global')

var login = function(req, res){
  if(req.body.username!="" || req.body.username!=0 ){
    user.count({'username': req.body.username}, function (err, count){
      if(count>0){
        user.findOne({ 'username': req.body.username }, 'password', function(err, user){
          console.log('-> database password for %s is %s', req.body.username, user.password)
          if(user.password === req.body.password ){
            loggedIn(req, res);
          }
          else console.log("-> Password Not Matched");
        })
      }
      else if(count==0) console.log('-> username not found');
    });
  }
}

function loggedIn(req, res) {
  console.log('-> Password matched');
  console.log("-> %s logged in Successfully.", req.body.username);
  global.loggedUsers.push({username: req.body.username, sessionID: cookies.setCookie(res)})
  console.log(global.loggedUsers)
  res.render('login', {loggedIn: 1 ,err: 'dsfds'})
}
module.exports = {
  login: login
}

var user = require('./dbs/userSchema')
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
          else{ console.log("-> Password Not Matched"); res.render('login', {loggedIn: 0, err: 'Password Not Matched'}); return; }
        })
      }
      else if(count==0){ console.log('-> username not found'); res.render('login', {loggedIn: 0, err: 'username not found'}); return; }
    });
  }
}

function loggedIn(req, res) {
  console.log('-> Password matched');
  console.log("-> %s logged in Successfully.", req.body.username);
  userID = Math.floor(Math.random() * 90000);
  res.cookie('session', userID, {signed: true})
  global.loggedUsers.push({username: req.body.username, sessionID: userID})
  console.log(global.loggedUsers)
  res.render('login', {loggedIn: 1 ,err: 0})
}
module.exports = { login }

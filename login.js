var getUserData = require('./dbs/getUserData')

var login = function(req, res){
  var username=req.body.username; var password=req.body.password;
  console.log("-> Log in Performed: " + username + "|||" + password);

  if(isLoggedIn(req, res)) {
    res.render('login', {loggedIn: 1 ,err: 0});
    console.log('Already Logged In'); return; } else console.log("Is not logged in.");

  if(!isUserPassValid(username, password)) {
    res.render('login', {loggedIn: 0 ,err: 'Invalid Username or Password'}); return; } else console.log("Valid UserPass");

  getUserData.isUserExists(username, (is) => {
    if(is) {
      isMatchPassword(username, password), (is) => {
          if(is)
        res.render('login', {loggedIn: 0 ,err: 'Incorrect Password'});
        else
        res.render('login', {loggedIn: 0 ,err: 'Password Matched'});
      }
    }
    else res.render('login', {loggedIn: 0 ,err: 'Username not found'});
  }

  // user.findOne({ 'username': req.body.username }, 'password', function(err, user){
  //   console.log('-> database password for %s is %s', req.body.username, user.password)
  //     if(user.password === req.body.password ){
  //       loggedIn(req, res);
  //     }
  //         else{ console.log("-> Password Not Matched"); res.render('login', {loggedIn: 0, err: 'Password Not Matched'}); return; }
  //       })
}

var isLoggedIn = function(req, res) {
  if (req.cookies.session) return 1; else return 0;
}

var isUserPassValid = function(username, password) {
  if(username=="" || username==0) return 0
  if(password=="" || password==0) return 0
  return 1
}

var isMatchPassword = function(username, password) {
  getUserData.matchUserPass(username, password, (matched) => {
    if(matched) return 1;
    else return 0;
  })
}

function loggedIn(req, res) {
  userID = Math.floor(Math.random() * 90000);

  user.update({username: req.body.username}, { cookie: userID },
    function(err, affected, resp) {
     console.log(resp);
  })

  res.cookie('session', userID, {signed: true})
  console.log(global.loggedUsers)
  res.render('login', {loggedIn: 1 ,err: 0})
}
module.exports = { login }

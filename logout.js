var user = require('./dbs/userSchema')
var logout = function(req, res) {
  res.render('login', {loggedIn: 0, err: 0})
  console.log("-> session log out: " + req.signedCookies.session);
  user.update({cookie: req.signedCookies.session}, {
    cookie: -1,
  }, function(err, affected, resp) {
    console.log(resp);
  })

}

module.exports = { logout }

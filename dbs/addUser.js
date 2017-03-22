var user = require('./userSchema')

module.exports = function(userDetails){
  var newuser = new user(userDetails)
  newuser.save(function(){})
}

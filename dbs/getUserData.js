var user = require('./userSchema')
// var global = require('./global')

var isUserExists = function(username, cb) { var is = 0;
  console.log('Checking count');
  user.count({'username': username}, function (err, count){
    console.log("count: " + count);
    if(count>0){ is=1; }
    cb(is)
  });
}

var matchUserPass = function(username, password) {
  return user.count({username, password});
}

var allUsers = () => {
  return user.find();
}

module.exports = { isUserExists, matchUserPass, allUsers }

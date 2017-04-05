var user = require('./userSchema')
// var global = require('./global')

var getUsername = function(req, res){ cookie = req.params['cookie']
  console.log("-> cookie received for getting name: ");
  console.log(cookie);
  console.log(req.params['cookie']);
  user.findOne({ cookie }, function(err, user){
    if(err) res.send('not found')
    res.send(user.username)
    console.log('-> Username Sent: ');
    console.log(user);
  })
}

var isUserExists = function(username, cb) { var is = 0;
  console.log('Checking count');
  user.count({'username': username}, function (err, count){
    console.log("count: " + count);
    if(count>0){ is=1; }
    cb(is)
  });
}

var matchUserPass = function(username, password, cb) {
  console.log('Matching Username and Password');
  user.count({username, password}, function (err, count){
    if(count!=1) { console.log("Not Matched"); cb(0); }
    else { console.log("Matched"); cb(1); }
  });
}

module.exports = { getUsername, isUserExists, matchUserPass }

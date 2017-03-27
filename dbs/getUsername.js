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

module.exports = { getUsername }

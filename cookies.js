
var setCookie = function(res){
  var userID = Math.floor(Math.random() * 90000);
  console.log(userID);
  res.cookie('session', userID, {signed: true})
  return userID
}

var getCookie = function(res){
  var userID = Math.floor(Math.random() * 90000);
  console.log(userID);
  return res.cookie('user', userID, {signed: true})
}

module.exports = {
  setCookie, getCookie
}

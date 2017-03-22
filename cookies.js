
var setCookie = function(res){
  var userID = Math.floor(Math.random() * 90000);
  console.log(userID);
  res.cookie('user', userID, {signed: true})
}

module.exports = {
  setCookie: setCookie
}

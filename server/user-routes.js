var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken');

var addUser = require('../dbs/addUser');
var getUserData = require('../dbs/getUserData');

var app = module.exports = express.Router();

function createToken(user) {
  const {username} = user;
  return jwt.sign({username}, config.secret, { expiresIn: 60*60*5 });
}

app.post('/users', function(req, res) {
  const { username, email, password } = JSON.parse(Object.keys(req.body)[0]);
  console.log(username, email, password);
  if (!username || !email || !password) {
    if (!username) return res.status(400).send({error: "You must send the username"});
    if (!email) return res.status(400).send({error: "You must send the email"});
    if (!password ) return res.status(400).send({error: "You must send the password "});
  }

  getUserData.allUsers()
  .then((users) => {
    if (_.find(users, {email})) return res.status(400).send({error: "A user with that email already exists"});
    if (_.find(users, {username})) return res.status(400).send({error: "A user with that username already exists"});
    const user = { username, email, password };
    addUser(user);
    res.status(201).send({
      id_token: createToken(user)
    });
  });
  });

app.post('/tokens', function(req, res) {
  const { username, email, password } = JSON.parse(Object.keys(req.body)[0]);
  if (!username || !password) {
    return res.status(400).send({error: "You must send the username and the password"});
  }
  console.log(req.params);
  getUserData.getUser(username, password)
  .then((user) => {
    if(!user) return res.status(401).send({error: "The username or password don't match"});
    if (user.length > 1) console.log("user conflict");
    res.status(201).send({
      id_token: createToken(user[0])
    });
  })
});

app.get('/allUsers', (req, res) => {
  getUserData.allUsers()
  .then((users) => {
    return res.send(users);
  })
})

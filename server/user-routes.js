var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken');

var addUser = require('../dbs/addUser');
var getUserData = require('../dbs/getUserData');

var app = module.exports = express.Router();

function createToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60*60*5 });
}

app.post('/users', function(req, res) {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    if (!username) return res.status(400).send("You must send the username");
    if (!email) return res.status(400).send("You must send the email");
    if (!password ) return res.status(400).send("You must send the password ");
  }

  getUserData.allUsers()
  .then((users) => {
    if (_.find(users, {email})) return res.status(400).send("A user with that email already exists");
    if (_.find(users, {username})) return res.status(400).send("A user with that username already exists");
    const user = { username, email, password };
    addUser(user);
    res.status(201).send({
      id_token: createToken(user)
    });
  });
  });

app.post('/tokens', function(req, res) {
  const { username, email, password } = req.body;
  if (!username || !password) {
    return res.status(400).send("You must send the username and the password");
  }

  getUserData.matchUserPass(username, password)
  .then((user) => {
    if(!user) return res.status(401).send("The username or password don't match");
    res.status(201).send({
      id_token: createToken(user)
    });
  })

});

app.get('/allUsers', (req, res) => {
  getUserData.allUsers()
  .then((users) => {
    return res.send(users);
  })
})

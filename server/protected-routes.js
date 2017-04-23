var express = require('express'),
    ejwt     = require('express-jwt'),
    jwt     = require('jsonwebtoken'),
    config  = require('./config');

var app = module.exports = express.Router();

const ejwtCheck = ejwt({
  secret: config.secret
});

app.post('/chat/addMessage', ejwtCheck, (req, res)=> {
  const from = req.user.username;
  const { message, to} = JSON.parse(Object.keys(req.body)[0]);
  console.log(message, to);
  const params = { message, to, from };
  // validation ~~~
  if (!message || !to || !from) {
    return res.status(400).send({error: "Missing Parameters"});
  }
  // ~~~ to must be a username
  // ----------------
  require('../dbs/addMessage')(params);
  return res.status(201).send({status: "Message sent successfully"});
});

app.get('/chat/getGlobalMessages', ejwtCheck, (req, res)=> {
  const messages = require('../dbs/getGlobalMessages')()
  .then((messages)=> {
    return res.send(messages);
  })
});

var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

// app.use('/addQuestion', jwtCheck);
app.use('/p/api', jwtCheck);

// app.get('/chat', function(req, res) {
//   res.status(200).render('index');
// });

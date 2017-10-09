var express = require('express');
var app = express();

process.env.PORT = process.env.PORT || 3000;
// Load the routing tables
require('../src/routes')(app);
var server = app.listen(process.env.PORT, function () {
  /* eslint no-console: off */
  console.log('Your app listening on port ' + process.env.PORT + '!');
});

module.exports = server;
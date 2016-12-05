var express = require('express');
var path = require('path');

var app = express();

app.listen(1337, function() {
  console.log('Tweetr server listening on port 1337!');
});

// Serve up static files in the public directory
app.use('/public', express.static(path.join(__dirname, '/../client/public')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../client/index.html'));
});

module.exports = app;

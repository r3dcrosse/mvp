var express = require('express');
var path = require('path');

var app = express();

app.listen(1337, function() {
  console.log('Tweetr server listening on port 1337!');
});

// Serve up static files in the public directory
app.use('/src/client/public/', express.static(path.join(__dirname, '/../client/public')));

// Serve up dummy data
app.use('/src/client/', express.static(path.join(__dirname, '/../client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../../index.html'));
});

module.exports = app;

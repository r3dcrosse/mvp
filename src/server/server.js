var express = require('express');
var path = require('path');
var twitterClient = require('./twitterClient.js');

var app = express();

app.listen(1337, function() {
  console.log('Tweetr server listening on port 1337!');
});

// Serve up static files in the public directory
app.use('/src/client/public/', express.static(path.join(__dirname, '/../client/public')));

// Serve up static files in syles (css stuff)
app.use('/styles/', express.static(path.join(__dirname, '/../../styles')));

// Serve up node_modules
app.use('/node_modules/', express.static(path.join(__dirname, '/../../node_modules')));

// Serve up dummy data
app.use('/src/client/', express.static(path.join(__dirname, '/../client')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/../../index.html'));
});

/* EXAMPLE TWEET RESPONSE
twitterClient.get('search/tweets', {q: 'node.js'}, function(err, tweets, response) {
  console.log(tweets);
});
*/

module.exports = app;

var express = require('express');
var path = require('path');
var twitterClient = require('./twitterClient.js');
var fakeTweets = require('./dummyData.js');

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

// ACTUAL TWITTER RESPONSE CLIENT (LIMIT: 180 requests per 15 minutes)
// app.get('/twitter', function(req, res) {
//   console.log('Making request to twitter API...');
//   twitterClient.get('search/tweets', {q: ' ', geocode: req.query.geo}, function(err, tweets, response) {
//     res.status(200).send(tweets);
//   });
// });

// FAKE TWITTER RESPONSE (USE FOR TESTING!!!!)
app.get('/twitter', function(req, res) {
  console.log('Making fake request to twitter API...');
  res.status(200).send(fakeTweets.dummyTweetsData);
});

module.exports = app;

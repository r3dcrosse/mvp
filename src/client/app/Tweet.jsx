import React from 'react';
var dataUtils = require('./lib/dataUtils.js');

class Tweet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const dist = 'Distance: ' + dataUtils.calcDist(this.props.currentLoc, this.props.tweet.geo);
    const timeSincePosted = dataUtils.calcTime(this.props.tweet.created_at);
    return (
      // Fun fact: can only return one component in react, so everything needs to
      // be wrapped in a div. That div is your one component you return!
      <div className="tweet-list-entry">
        <div className="media-left media-middle">
          <img className="tweet-list-entry-image" src={this.props.tweet.user.profile_image_url} />
        </div>
        <div className="media-body">
          <div className="tweet-list-entry-title">{'@'+this.props.tweet.user.screen_name}</div>
          <div className="tweet-list-entry-detail">{this.props.tweet.text}</div>
          <div className="tweet-list-entry-detail">{timeSincePosted}</div>
          <div className="tweet-list-entry-detail">{dist}</div>
        </div>
      </div>
    );
  }
}

export default Tweet;

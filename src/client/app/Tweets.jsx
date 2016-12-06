import React from 'react';
import Tweet from './Tweet.jsx';

class Tweets extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="tweet-list media">
        {
          this.props.tweetData.map(tweet =>
            <Tweet key={tweet.id} tweet={tweet} />
          )
        }
      </div>
    );
  }
}

export default Tweets;

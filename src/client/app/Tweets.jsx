import React from 'react';
import Tweet from './Tweet.jsx';

class Tweets extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {likesCount : 0};
    // this.onLike = this.onLike.bind(this);
  }

  render() {
    return (
      <div className="tweet-list media">
        {
          this.props.tweetData.map(tweet =>
            <Tweet tweet={tweet} />
          )
        }
      </div>
    );
  }
}

export default Tweets;

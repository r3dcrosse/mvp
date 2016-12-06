import React from 'react';

class Tweet extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.tweet.user.profile_image_url} />
        </div>
        <div className="media-body">
          <div className="tweets-username">{'@'+this.props.tweet.user.screen_name}</div>
          <div className="tweets-text">{this.props.tweet.text}</div>
        </div>
      </div>
    );
  }
}

export default Tweet;

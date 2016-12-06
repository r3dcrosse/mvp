import React from 'react';
import {render} from 'react-dom';
import Tweets from './Tweets.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div className="col-md-7">
        <Tweets tweetData={window.dummyTweetsData.statuses} />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

import React from 'react';
import {render} from 'react-dom';
import Tweets from './Tweets.jsx';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render () {
    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <Tweets tweetData={window.dummyTweetsData.statuses} />
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

import React from 'react';
import {render} from 'react-dom';
import Tweets from './Tweets.jsx';
import Nav from './Nav.jsx';
import SideBar from './SideBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <SideBar className="pure-u-1-2"/>
        <div className="pure-g">
          <Nav className="pure-u-1"/>
          <div className="pure-u-1-2">
          <Tweets tweetData={window.dummyTweetsData.statuses} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

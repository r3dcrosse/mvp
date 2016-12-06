import React from 'react';
import {render} from 'react-dom';
import Tweets from './Tweets.jsx';
import Nav from './Nav.jsx';
import SideBar from './SideBar.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      locations: {
        default: [undefined, undefined]
      }
    }
  }

  onGetLocationHandler (pos) {
    this.setState({
      locations: {
        default: [pos.coords.latitude, pos.coords.longitude]
      }
    });

    console.log('Updated location in state: ',this.state);
  }

  render () {
    const getLocHandler = this.onGetLocationHandler.bind(this);
    const coords = this.state.locations.default;

    return (
      <div>
        <Nav getLocHandler={getLocHandler} coords={coords}/>
        <SideBar className="pure-u-1-2"/>
        <div className="pure-g">
          <div className="pure-u-1-2">
          <Tweets tweetData={window.dummyTweetsData.statuses} />
          </div>
        </div>
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));

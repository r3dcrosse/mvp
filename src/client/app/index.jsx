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
      },
      tweets: []
    }
  }

  updateTweetData (tweetData) {
    this.setState({
      tweets: tweetData
    });
  }

  onGetLocationHandler (pos) {
    console.log('lat recieved', pos.coords.latitude);
    console.log('long recieved', pos.coords.longitude);
    this.setState({
      locations: {
        default: [pos.coords.latitude, pos.coords.longitude]
      }
    });

    console.log('Updated location in state: ',this.state);
    var options = pos.coords.latitude.toString() + ',' + pos.coords.longitude.toString();
    this.props.getTwitterData(options, this.updateTweetData.bind(this));
  }

  sideBarAddItemClicked () {
    console.log('+ sign clicked!!!');
  }

  render () {
    const getLocHandler = this.onGetLocationHandler.bind(this);
    const addItemClicked = this.sideBarAddItemClicked.bind(this);
    const coords = this.state.locations.default;
    const tweets = this.state.tweets;

    return (
      <div>
        <SideBar className="pure-u-1-2" addItemClicked={addItemClicked}/>
        <Nav getLocHandler={getLocHandler} coords={coords}/>
        <div className="pure-g">
          <div className="pure-u-1-2">
          <Tweets tweetData={tweets} currentLoc={coords}/>
          </div>
        </div>
      </div>
    );
  }
}

render(<App getTwitterData={window.makeTwitterReq} />, document.getElementById('app'));

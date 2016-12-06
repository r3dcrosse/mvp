import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  savePosition (pos) {
    this.props.getLocHandler(pos);
  }

  getCurrentLocation() {
    console.log('Trying to get current location');

    var navClass = this;
    window.navigator.geolocation.getCurrentPosition(function(position) {
      navClass.savePosition(position);
    })
  }

  setCurrentLocation() {
    var pos = {
      coords: {
        latitude: parseFloat(document.getElementById('lat').value),
        longitude: parseFloat(document.getElementById('long').value)
      }
    };

    console.log('GOT HERE', pos);
    // TODO: Fix bug, set state this way is one step behind, need to click setCurrentLocation twice to update state

    this.savePosition(pos);
  }

  render() {
    return (
      <nav className="pure-menu pure-menu-horizontal">
        <button className="btn hidden-sm-down" onClick={() => this.getCurrentLocation()} >
          <span className="glyphicon glyphicon-map-marker"></span>
        </button>
        <button className="btn hidden-sm-down" onClick={() => this.setCurrentLocation()} >
          <span className="glyphicon glyphicon-refresh"></span>
        </button>
        <form>
          <div className="form-group">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <input id="lat" className="form-control" type="text" placeholder="Latitude" />
              </li>
              <li className="pure-menu-item">
                <input id="long" className="form-control" type="text" placeholder="Longitude"/>
              </li>
            </ul>
          </div>
        </form>
      </nav>
    );
  }

}

export default Nav;

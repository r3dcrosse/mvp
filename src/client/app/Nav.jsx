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
      <nav className="pure-menu pure-menu-horizontal navbar">
        <span>
          <input id="lat" className="form-control" type="text" placeholder="Latitude" />
          <input id="long" className="form-control" type="text" placeholder="Longitude"/>
        </span>
        <span>
          <button className="btn btn-info" onClick={() => this.getCurrentLocation()} >
            <span className="glyphicon glyphicon-map-marker"></span>
          </button>
        </span>
        <span>
          <button className="btn btn-danger" onClick={() => this.setCurrentLocation()} >
            <span className="glyphicon glyphicon-refresh"></span>
          </button>
        </span>
      </nav>
    );
  }

}

export default Nav;

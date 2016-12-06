import React from 'react';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  getCurrentLocation() {
    console.log('Trying to get current location');
    var savePosition = (pos) => {
      this.props.getLocHandler(pos);
    };

    window.navigator.geolocation.getCurrentPosition(function(position) {
      savePosition(position);
    })
  }

  setCurrentLocation() {
    var pos = {
      coords: {
        latitude: parseFloat(document.getElementById('lat').value),
        longitude: parseFloat(document.getElementById('long').value)
      }
    };

    this.props.getLocHandler(pos);
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

import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input className="form-control" type="text" placeholder="Latitude"/>
            <input className="form-control" type="text" placeholder="Longitude"/>
            <button className="btn hidden-sm-down" onClick={console.log('clicked!')} >
            <span className="glyphicon glyphicon-map-marker"></span>
            </button>
            <button className="btn hidden-sm-down" onClick={console.log('got here!')} >
            <span className="glyphicon glyphicon-refresh"></span>
            </button>
          </div>
        </form>
      </nav>
    );
  }

}

export default Nav;

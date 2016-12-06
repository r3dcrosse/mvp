import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <div className="col-md-6 col-md-offset-3">
          <input className="form-control" type="text" />
          <input className="form-control" type="text" />
          <button className="btn hidden-sm-down" onClick={console.log('clicked!')} >
            <span className="glyphicon glyphicon-map-marker"></span>
          </button>
          <button className="btn hidden-sm-down" onClick={console.log('got here!')} >
            <span className="glyphicon glyphicon-refresh"></span>
          </button>
        </div>
      </nav>
    );
  }

}

export default Nav;

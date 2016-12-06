import React from 'react';

class Nav extends React.Component {
  render() {
    return (
      <nav className="pure-menu pure-menu-horizontal">
        <form>
          <div className="form-group">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                <input className="form-control" type="text" placeholder="Latitude"/>
              </li>
              <li className="pure-menu-item">
                <input className="form-control" type="text" placeholder="Longitude"/>
              </li>
              <li className="pure-menu-item">
                <button className="btn hidden-sm-down" onClick={console.log('clicked!')} >
                  <span className="glyphicon glyphicon-map-marker"></span>
                </button>
              </li>
              <li className="pure-menu-item">
                <button className="btn hidden-sm-down" onClick={console.log('got here!')} >
                  <span className="glyphicon glyphicon-refresh"></span>
                </button>
              </li>
            </ul>
          </div>
        </form>
      </nav>
    );
  }

}

export default Nav;

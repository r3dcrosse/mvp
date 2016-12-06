import React from 'react';
import SideBarItem from './SideBarItem.jsx';

class SideBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="pure-menu custom-restricted-width sidebar">
        <span className="pure-menu-heading">Tweetr</span>
          <ul className="pure-menu-list">
              <SideBarItem />
          </ul>
      </div>
    );
  }

}

export default SideBar;

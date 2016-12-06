import React from 'react';

class SideBarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="pure-menu-item">
          <a>Location one</a>
      </li>
    );
  }
}

export default SideBarItem;

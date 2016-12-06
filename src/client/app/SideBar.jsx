import React from 'react';
import SideBarItem from './SideBarItem.jsx';
import AddSideBarItem from './AddSideBarItem.jsx';

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
              <AddSideBarItem addItemClicked={this.props.addItemClicked}/>
          </ul>
      </div>
    );
  }

}

export default SideBar;

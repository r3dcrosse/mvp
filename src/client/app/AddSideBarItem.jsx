import React from 'react';

class AddSideBarItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="pure-menu-item" onClick={this.props.addItemClicked}><a>+</a></li>
    );
  }
}

export default AddSideBarItem;

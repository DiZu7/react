// algo
// 1. class component
// - write constructor with arg props, don't forget about super
// - describe state with default Off
// 2. write eventhandler onClick (toggleStatus)
// - change state
// 3. add handler to button
// 4. Add condition if status true - return off, else on

import React from 'react';
import './index.scss';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOff: true,
    };
  }

  toggleStatus = () => {
    this.setState(state => ({
      isToggleOff: !state.isToggleOff,
    }));
  };
  render() {
    return (
      <div className="toggler" onClick={this.toggleStatus}>
        {this.state.isToggleOff ? 'Off' : 'On'}
      </div>
    );
  }
}

export default Toggler;

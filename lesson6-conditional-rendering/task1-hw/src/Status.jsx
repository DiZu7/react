import React from 'react';
import './index.scss';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  state = {
    isOnline: false,
  };

  goOnline = () => {
    this.setState({
      isOnline: true,
    });
  };

  render() {
    return (
      <div className="status">
        {this.state.isOnline ? <Online /> : <Offline goOnline={this.goOnline} />}
      </div>
    );
  }
}

export default Status;

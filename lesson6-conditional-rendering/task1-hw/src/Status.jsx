import React from 'react';
import './index.scss';
import Online from './Online';
import Offline from './Offline';

class Status extends React.Component {
  render() {
    return <div className="status">{this.props.isOnline ? <Online /> : <Offline />}</div>;
  }
}

export default Status;

// algo
// add status online to state
// add EventListener on window to check the status (event: online/ offline, onChangeStatus )
// onChangeStatus => toggle state on online/offline
// remove EventListener
// render jsx : if offline - add on jsx elem class status_offline

import React from 'react';

class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: 'online',
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.onToggleStatus);
    window.addEventListener('online', this.onToggleStatus);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.onToggleStatus);
    window.removeEventListener('offline', this.onToggleStatus);
  }

  onToggleStatus = e => {
    this.setState({
      status: e.type,
    });
  };

  render() {
    const className = this.state.status === 'online' ? 'status' : 'status status_offline';

    return <div className={className}>{this.state.status}</div>;
  }
}

export default ConnectionStatus;

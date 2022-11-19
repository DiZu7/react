// algo
// add status online to state
// add EventListener on window to check the status (event: online/ offline, onChangeStatus )
// onChangeStatus => toggle state on online/offline
// remove EventListener
// render jsx : if offline - add on jsx elem class status_offline

import React from 'react';

class ConnectionStatus extends React.Component {
  state = {
    online: false,
  };

  componentDidMount() {
    window.addEventListener('online', this.onToggleStatus);
    window.addEventListener('offline', this.onToggleStatus);
  }

    componentWillUnmount() {
      window.removeEventListener('online', onToggleStatus);
      window.removeEventListener('offline', onToggleStatus);
    }

  onToggleStatus = () => {
    this.setState({
      online: !this.state.online,
    });
  };

  render() {
    return (
      <div className={this.state.offline ? 'status status_offline' : 'status'}>
        {this.state.offline ? 'Offline' : 'Online'}
      </div>
    );
  }
}

export default ConnectionStatus;

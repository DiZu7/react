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
      online: true,
    };
  }

  componentDidMount() {
    window.addEventListener('offline', this.onToggleStatus);
    window.addEventListener('online', this.onToggleStatus);
    //  window.addEventListener('offline', this.onOfflineStatus);
    //  window.addEventListener('online', this.onOnlineStatus);
  }

  //   componentWillUnmount() {
  //     window.removeEventListener('online', this.onOnlineStatus);
  //     window.removeEventListener('offline', this.onOfflineStatus);
  //   }

  onToggleStatus = e => {
    const { onLine } = e.target.navigator;
    this.setState({
      online: onLine,
    });
  };

  //   onOnlineStatus = e => {
  //     this.setState({
  //       online: e.target.navigator.onLine,
  //     });
  //   };

  render() {
    const className = this.state.online ? 'status' : 'status status_offline';
    const statusText = this.state.online ? 'online' : 'offline';

    return <div className={className}>{statusText}</div>;
  }
}

export default ConnectionStatus;

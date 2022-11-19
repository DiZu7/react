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
  }

  componentWillUnmount() {
    window.removeEventListener('online', onToggleStatus);
    window.removeEventListener('offline', onToggleStatus);
  }

  onToggleStatus = event => {
    this.setState({
      online: event.target.navigator.onLine,
    });
  };

  render() {
    return (
      <div className={this.state.online ? 'status' : 'status status_offline'}>
        {this.state.online ? 'Online' : 'Offline'}
      </div>
    );
  }
}

export default ConnectionStatus;

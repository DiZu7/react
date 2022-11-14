import React from 'react';
import './index.scss';

class Mailbox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="mailbox">
        <span className="mailbox__text">messages</span>
        {this.props.unreadMessages.length > 0 && (
          <span className="mailbox__count">{this.props.unreadMessages.length}</span>
        )}
      </div>
    );
  }
}

export default Mailbox;

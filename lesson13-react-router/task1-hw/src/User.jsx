import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './index.scss';

class User extends React.Component {
  state = {
    userData: '',
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.match.params.user_id}`)
      .then(response => response.json())
      .then(data => this.setState({ userData: data }));
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.user_id !== prevProps.user_id) {
      fetch(`https://api.github.com/users/${this.props.match.params.user_id}`)
        .then(response => response.json())
        .then(data => this.setState({ userData: data }));
    }
  }

  render() {
    const { name, location, avatar_url } = this.state.userData;
    //  console.log(this.props.match.params.user_id);
    //  console.log(this.state.userData);

    return (
      <div className="user">
        <img alt="User Avatar" src={avatar_url} className="user__avatar" />
        <div className="user__info">
          <span className="user__name">{name}</span>
          <span className="user__location">{location}</span>
        </div>
      </div>
    );
  }
}

export default User;

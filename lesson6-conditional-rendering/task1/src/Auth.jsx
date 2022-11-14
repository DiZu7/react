import React from 'react';
import Greeting from './Greeting';
import './index.scss';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    // const button = this.state.isLoggedIn ? (
    //   <button className="btn logout" onClick={this.onLogout}>
    //     Logout
    //   </button>
    // ) : (
    //   <button className="btn login" onClick={this.onLogin}>
    //     Login
    //   </button>
    // );
    const button = this.state.isLoggedIn ? (
      <Logout onLogout={this.onLogout} />
    ) : (
      <Login onLogin={this.onLogin} />
    );

    return (
      <div className="pannel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        <div>{button}</div>
      </div>
    );
  }
}

export default Auth;

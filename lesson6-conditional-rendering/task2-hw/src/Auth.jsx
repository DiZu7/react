// Auth jsx
// add state = {isLoggedIn = true}
// add method onLogin (change state on isLoggedIn = true)
// add method onLogout (change state on isLoggedIn = false)
// add condition if isLoggedIn = true return Login onLogin={onLogin} else return Spinner size = 2 s during 2s and then Logout onLogout={onLogout}

import React from 'react';
import Spinner from './Spinner';
import './index.scss';
import Login from './Login';
import Logout from './Logout';

class Auth extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      isSpinnerOn: false,
    };
  }

  onLogin = () => {
    this.setState({
      isLoggedIn: true,
      isSpinnerOn: true,
    });
  };

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  // renderSpinner = () => {
  //   if (!this.state.isSpinnerOn) {
  //     return null;
  //   }

  //   setTimeout(() => {
  //     this.setState({
  //       isSpinnerOn: false,
  //     });
  //   }, 2000);

  //   return <Spinner size={80} />;
  // };

  // renderLogout = () => {
  //   if (this.state.isSpinnerOn) {
  //     return null;
  //   }

  //   return <Logout onLogout={this.onLogout} />;
  // };

  render() {
    const renderSpinner = () => {
      if (!this.state.isSpinnerOn) {
        return null;
      }

      setTimeout(() => {
        this.setState({
          isSpinnerOn: false,
        });
      }, 2000);

      return <Spinner size={40} />;
    };

    const renderLogout = () => {
      if (this.state.isSpinnerOn) {
        return null;
      }

      return <Logout onLogout={this.onLogout} />;
    };

    return (
      <>
        {this.state.isLoggedIn ? (
          <>
            {renderSpinner()}
            {renderLogout()}
          </>
        ) : (
          <Login onLogin={this.onLogin} />
        )}
      </>
    );
  }
}

export default Auth;

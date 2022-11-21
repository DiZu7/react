import React from 'react';
import './index.scss';
import UserForm from './UserForm';

class App extends React.Component {
  createUser = userData => {
    console.log(userData);
  };

  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}

export default App;

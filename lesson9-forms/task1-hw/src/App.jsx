import React from 'react';
import './index.scss';
import UsersList from './UsersList';

const users = [
  {
    id: '1',
    age: 21,
    name: 'Bob',
  },
  {
    id: '2',
    age: 17,
    name: 'Tom',
  },
  {
    id: '3',
    age: 18,
    name: 'Tad',
  },
  {
    id: '4',
    age: 45,
    name: 'Sam',
  },
];

class App extends React.Component {
  render() {
    return <UsersList users={users} />;
  }
}

export default App;

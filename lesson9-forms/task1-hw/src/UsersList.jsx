import React from 'react';
import './index.scss';
import User from './User';
import Filter from './Filter';

class UserList extends React.Component {
  state = {
    value: '',
    // count: this.props.users.length,
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
      // count: this.filterUsers(this.props.users).length,
    });
  };

  filterUsers = users => {
    if (this.state.value === '') {
      return users;
    }
    return users.filter(({ name }) => name.includes(this.state.value));
  };

  render() {
    const renderedList = this.filterUsers(this.props.users).map(user => (
      <User key={user.id} {...user} />
    ));

    return (
      <div>
        <Filter
          filterText={this.state.value}
          count={renderedList.length}
          onChange={this.handleChange}
        />
        <ul className="users">{renderedList}</ul>
      </div>
    );
  }
}

export default UserList;

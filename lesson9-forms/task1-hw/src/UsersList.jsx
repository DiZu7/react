import React from 'react';
import './index.scss';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  filterUsers = (users, filterText) => {
    if (this.state.value === '') {
      return users;
    }
    return users.filter(({ name }) => name.includes(filterText));
  };

  render() {
    const renderedList = this.filterUsers(this.props.users, this.state.value).map(user => (
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

export default UsersList;

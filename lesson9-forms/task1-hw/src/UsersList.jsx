import React from 'react';
import './index.scss';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    filterText: '',
  };

  handleChange = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  render() {
    const filteredUsers = this.props.users
      .filter(({ name }) => name.toLowerCase().includes(this.state.filterText.toLowerCase()))
      .map(user => <User key={user.id} {...user} />);

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.handleChange}
        />
        <ul className="users">{filteredUsers}</ul>
      </div>
    );
  }
}

export default UsersList;

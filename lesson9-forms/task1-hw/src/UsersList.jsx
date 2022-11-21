import React from 'react';
import './index.scss';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    value: '',
    // count: this.props.users.length,
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  filterUsers = (users, filterText) => {
    if (!filterText) {
      return users;
    }

    return users.filter(({ name }) => name.includes(filterText));
  };

  // handleChangeCount = (users, filterText) => {
  //   this.setState({
  //     count: this.filterUsers(users, filterText).length,
  //   });
  // };

  render() {
    const renderedList = this.filterUsers(this.props.users, this.state.value).map(user => (
      <User key={user.id} {...user} />
    ));

    // if (this.state.value === '') {
    //   return users;
    // }

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

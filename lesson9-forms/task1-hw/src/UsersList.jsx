import React from 'react';
import './index.scss';
import User from './User';
import Filter from './Filter';

class UsersList extends React.Component {
  state = {
    filterText: '',
    count: this.props.users.length,
  };

  handleChange = e => {
    this.setState({
      filterText: e.target.value,
    });
  };

  // filterUsers = (users, filterText) => {
  //   if (filterText === '') {
  //     return users;
  //   }

  //   return users.filter(({ name }) => name.includes(filterText));
  // };

  // handleChangeCount = (users, filterText) => {
  //   this.setState({
  //     count: this.filterUsers(users, filterText).length,
  //   });
  // };

  render() {
    // const renderedList = this.filterUsers(this.props.users, this.state.value).map(user => (
    //   <User key={user.id} {...user} />
    // ));

    // if (this.state.value === '') {
    //   return users;
    // }

    const newArr = this.props.users.filter(({ name }) =>
      name.toUpperCase().includes(this.state.filterText.toUpperCase()),
    );

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={newArr.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.state.filterText === ''
            ? this.props.users.map(user => <User key={user.id} {...user} />)
            : newArr.map(user => <User key={user.id} {...user} />)}
        </ul>
      </div>
    );
  }
}

export default UsersList;

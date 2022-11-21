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

  renderList = users => users.map(user => <User key={user.id} {...user} />);

  render() {
    const filteredUsers = this.props.users.filter(({ name }) =>
      name.toUpperCase().includes(this.state.filterText.toUpperCase()),
    );

    return (
      <div>
        <Filter
          filterText={this.state.filterText}
          count={filteredUsers.length}
          onChange={this.handleChange}
        />
        <ul className="users">
          {this.state.filterText === ''
            ? this.renderList(this.props.users)
            : this.renderList(filteredUsers)}
        </ul>
      </div>
    );
  }
}

export default UsersList;

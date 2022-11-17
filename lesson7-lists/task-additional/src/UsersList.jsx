import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    itemsPerPage: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  getPaginatedData = data => {
    const startIndex = this.state.currentPage * this.state.itemsPerPage - this.state.itemsPerPage;
    const endIndex = startIndex + this.state.itemsPerPage;
    return data.slice(startIndex, endIndex);
  };

  render() {
    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={3}
        />
        <ul className="users">
          {this.getPaginatedData(this.props.users).map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;

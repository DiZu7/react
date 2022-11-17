import React from 'react';
import Pagination from './Pagination';
import User from './User';

class UsersList extends React.Component {
  state = {
    currentPage: 1,
    index: 3,
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      // index: this.state.index - 3,
    });
  };
  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      // index: this.state.index + 3,
    });
  };

  getPaginatedData = (data, itemsPerPage) => {
    const startIndex = this.state.currentPage * itemsPerPage - itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
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
          {this.getPaginatedData(this.props.users, 3).map((user, index) =>
            index < this.state.index ? <User key={user.id} {...user} /> : null,
          )}
        </ul>
      </div>
    );
  }
}

export default UsersList;

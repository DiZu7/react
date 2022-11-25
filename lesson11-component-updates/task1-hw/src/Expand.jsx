import React from 'react';
import './index.scss';

class Expand extends React.Component {
  state = {
    isBtnActive: false,
  };

  toggleStatusBtn = () => {
    this.setState({
      isBtnActive: !this.state.isBtnActive,
    });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.toggleStatusBtn}>
            {this.state.isBtnActive ? (
              <i class="fas fa-chevron-up"></i>
            ) : (
              <i class="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="expand__content">{this.state.isBtnActive ? this.props.children : null}</div>
      </div>
    );
  }
}

export default Expand;

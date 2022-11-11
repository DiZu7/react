import React, { Component } from 'react';
import './index.scss';

class GoodButton extends Component {
  constructor() {
    super();
  }
  handleClick(e) {
    alert(e.target.textContent);
  }

  render() {
    return (
      <button className="fancy-button" onClick={this.handleClick}>
        Click me!
      </button>
    );
  }
}

export default GoodButton;

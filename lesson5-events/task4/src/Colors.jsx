import React, { Component } from 'react';
import './index.scss';

const red = '#f00';
const green = '#0f0';
const blue = '#00f';

class Colors extends Component {
  setBodyColor = color => {
    document.body.style.backgroundColor = color;
  };
  render() {
    return (
      <div className="colors">
        <button
          style={{ backgroundColor: red }}
          className="colors__button"
          onClick={this.setBodyColor.bind(this, red)}
        ></button>
        <button
          style={{ backgroundColor: green }}
          className="colors__button"
          onClick={this.setBodyColor.bind(this, green)}
        ></button>
        <button
          style={{ backgroundColor: blue }}
          className="colors__button"
          onClick={this.setBodyColor.bind(this, blue)}
        ></button>
      </div>
    );
  }
}

export default Colors;

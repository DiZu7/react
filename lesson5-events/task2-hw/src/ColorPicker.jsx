// algo
// 1. describe handler
// - on mouse enter - show text of color in title
// - erase field after mouse out
// 2. add handler event on buttom elem

import React, { Component } from 'react';
import './index.scss';

const aqua = 'Aqua';
const coral = 'Coral';
const bisque = 'Bisque';
// const colorName = 'TEXT';

class ColorPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorName: null,
    };
  }

  showColor = color => {
    this.setState({
      colorName: color,
    });
  };

  cleanField = () => {
    this.setState({
      colorName: '',
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.colorName}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={this.showColor.bind(this, coral)}
            onMouseLeave={this.cleanField}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={this.showColor.bind(this, aqua)}
            onMouseLeave={this.cleanField}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={this.showColor.bind(this, bisque)}
            onMouseLeave={this.cleanField}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;

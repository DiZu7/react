import React from 'react';
import Life from './Life';

class Demo extends React.Component {
  state = {
    number: Math.round(Math.random() * 100),
    visible: true,
  };

  show = () => {
    this.setState({
      visible: true,
      number: Math.round(Math.random() * 100),
    });
  };

  hide = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <div>
          <button onClick={this.show}>Show</button>
          <button onClick={this.hide}>Hide</button>
        </div>
        <div>{this.state.visible && <Life number={this.state.number} />}</div>
      </div>
    );
  }
}

export default Demo;

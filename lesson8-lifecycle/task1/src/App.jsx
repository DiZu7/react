import React from 'react';
import Life from './Life';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.round(Math.random() * 100),
      visible: false,
    };
  }

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

  update = () => {
    this.setState({
      number: Math.round(Math.random() * 100),
    });
  };

  render() {
    return (
      <>
        <button onClick={this.show}>Show</button>
        <button onClick={this.hide}>Hide</button>
        {/* <button onClick={this.update}>Update</button> */}
        <div>{this.state.visible && <Life number={this.state.number} />}</div>
      </>
    );
  }
}

export default App;

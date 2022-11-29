import React from 'react';
import EvenNumbers from './EvenNumbers';
import './index.scss';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';

class App extends React.Component {
  state = {
    number: 0,
  };

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        number: this.state.number + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="app">
        <EvenNumbers number={this.state.number} />
        <Numbers title="All numbers" number={this.state.number} />
        <OddNumbers number={this.state.number} />
        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}

export default App;

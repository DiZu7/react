import React from 'react';

class Life extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: Math.round(Math.random() * 100),
      visible: false,
    };
    console.log('constructor: good place to create state');
  }

  componentDidMount() {
    this.setState({
      visible: true,
      number: Math.round(Math.random() * 100),
    });

    console.log('componentDidMount: API calls, subscriptions');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate(nextProps, nextState): decide to render or not to render');
    return nextProps.number !== this.state.number;
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
  }

  componentWillUnmount() {
    this.setState({
      visible: false,
    });
    console.log('componentWillUnmount: cleanup before DOM related to component will be removed');
  }

  render() {
    console.log('return React element to build DOM');
    return <div>{this.state.visible && this.state.number}</div>;
  }
}
export default Life;

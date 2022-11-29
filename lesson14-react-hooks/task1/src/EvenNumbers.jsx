import React from 'react';
import './index.scss';

class EvenNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 0;
  }
  
  render() {
    return (
      <div className="number">
        <span className="number__title">Even number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default EvenNumbers;

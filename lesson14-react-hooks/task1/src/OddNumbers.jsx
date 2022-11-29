import React from 'react';
import './index.scss';

class OddNumbers extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.number % 2 === 1;
  }

  render() {
    return (
      <div className="number">
        <span className="number__title">Odd number</span>
        <span className="number__value">{this.props.number}</span>
      </div>
    );
  }
}

export default OddNumbers;

import React from 'react';
import './index.scss';
import Message from './Message';

const text1 = 'Hello, world!';
const text2 = 'Another exciting text.';

class Page extends React.Component {
  state = {
    text: null,
  };

  setText = text => {
    this.setState({
      text,
    });
  };
  render() {
    return (
      <div className="page">
        <Message text={this.state.text} />
        <div className="actions">
          {/* <button className="btn" onClick={this.setText.bind(this, text1)}> */}
          <button className="btn" onClick={() => this.setText(text1)}>
            Text 1
          </button>
          <button className="btn" onClick={() => this.setText(text2)}>
            Text 2
          </button>
          <button className="btn" onClick={() => this.setText('')}>
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default Page;

// import React from 'react';
// import './index.scss';

// const Offline = ({ goOnline }) => {
//   return (
//     <>
//       <span className="status__text">Offline</span>
//       <button className="status__btn" onClick={goOnline}>
//         Reconnect
//       </button>
//     </>
//   );
// };

// export default Offline;

import React, { Component } from 'react';

class Offline extends Component {
  render() {
    return (
      <>
        <span className="status__text">Offline</span>
        <button onClick={this.props.goOnline} className="status__btn">
          Reconnect
        </button>
      </>
    );
  }
}
export default Offline;

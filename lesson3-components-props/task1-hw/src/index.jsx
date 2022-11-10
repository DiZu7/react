import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './Greeting';
import './index.scss';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Greeting firstName="John" lastName="Doe" birthDate={new Date('1994-12-31T11:30:00Z')} />, rootElem);
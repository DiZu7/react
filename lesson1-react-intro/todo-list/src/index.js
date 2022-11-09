import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const rootElem = document.querySelector('#root');

const element = (<h1 class="title">Todo List</h1>);

ReactDOM.render(element, rootElem);

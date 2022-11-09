import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Comment from './Comment';

const rootElem = document.querySelector('#root');

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars.dicebear.com/api/adventurer-neutral/mail%40ashallendesign.co.uk.svg',
};

ReactDOM.render(
  <Comment author={userInfo} text="Good job!" date={new Date('2022-11-09T11:30:19.566Z')} />,
  rootElem,
);

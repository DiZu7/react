import React from 'react';
import Counter from './Counter.jsx';

const App = () => {
  return (
    <>
      <Counter start={5} interval={1000} />
      <Counter start={12} interval={3000} />
      <Counter start={-21} interval={5000} />
    </>
  );
};

export default App;

import React, { useState } from 'react';
import Clock from './Clock';

const App = () => {
  const [isVisible, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!isVisible);
  };

  return (
    <>
      <button onClick={toggleVisibility}>Toggle</button>
      <div>{isVisible && <Clock location="New York" offset={-5} />}</div>
      <div>{isVisible && <Clock location="Kyiv" offset={2} />}</div>
      <div>{isVisible && <Clock location="London" offset={0} />}</div>
    </>
  );
};

export default App;

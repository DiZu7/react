import React from 'react';
import Expand from './Expand';
import './index.scss';

// 3 components: index, App, Expand

// algo
// Expand
// input: string (title)
// if !isBtnActive - return null
// else - render jsx

// App
// 1. add state of btn (isBtnActive: false)
// 2. add method, which change status of btn (toggleBtn: setState isBtnActive: !isBtnActive)
// 3. render Expand with props title, callback

class App extends React.Component {
  

  render() {
    return (
      <div className="app">
        <Expand title="Some title">
          <p>
            Hooks are a new addition in React 16.8. They let you use state and other React features
            without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;

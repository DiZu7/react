import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import User from './User';
import './index.scss';

const App = () => {
  return (
    <div className="page">
      <div className="page__content">
        <BrowserRouter>
          <h1>Users</h1>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <span>Select a user please</span>
            </Route>
            <Route path="/users/:userId">
              <User />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

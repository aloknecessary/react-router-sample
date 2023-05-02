import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

import RedirectOnClickSampler from './components/clickRedirectSampler';
import About from './components/about';
import Messages from './components/message';

const Home = () => (
  <div>
    <h2>Home</h2>
    This example shows how to use React Router. Welcome to Home!!
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>  <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
  </div>
);



function App() {
  return (
    <div className="App">
      
      <div className="menu">
            <ul>
              <li> <Link to="/messages">Messages</Link> </li>
              <li> <Link to="/about">About</Link> </li>
            </ul>
            <RedirectOnClickSampler />
        </div>
        <div className="App-intro">
          <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/messages" component={Messages} />
            <Route path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </div>
    </div>
  );
}

export default App;

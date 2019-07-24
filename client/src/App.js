import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewPage from './NewPage';
import Fib from './Fib';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Fibonacci Calculator
          </p>
          <Link to="/">Home</Link>
          <Link to="/newpage">New Page</Link>
        </header>
        <Route exact path="/" component={Fib} />
        <Route path="/newpage" component={NewPage} />
      </div>
    </Router>
  );
}

export default App;

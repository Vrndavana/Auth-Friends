import React from 'react';
import './App.css';
// My Imports
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Login} from './components/Login';
import {Friends} from './components/Friends';



function App() {
  return (
    <Router>

    <div className="App">
      
      <nav className='move'>
        <button> 
          <Link to="/">Home </Link>
        </button>
        <button>
          <Link to="/login">Login</Link>
        </button>

        {/* <Link to="/protected"> Why Am I here?</Link> */}
      </nav>
      <Switch>
         <Route path="/login" component={Login} />
         <Route exath path="/protected" components={Friends}/>
      </Switch>
    </div></Router>
  );
}

export default App;

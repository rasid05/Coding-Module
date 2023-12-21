import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,

  Route,
  Link
} from "react-router-dom";
import Home from './Pages/Home';
import Login from './containers/login/login';
import Problem from './containers/problems/problems';


function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
      <Router>  
        <Switch>
          <Route exact path="/" ><Home /></Route>
            <Route exact path="/problems"><Problem /></Route>
          <Route exact path="/signup"><Login /></Route>
          <Route exact path="/admin"><Login/></Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RVRegister from './components/registerforms/RVRegister.js'; 
import PrivateRoute from './components/utilities/PrivateRoute';
import LandownerLogin from './components/loginforms/LandownerLogin';
import RVLogin from './components/loginforms/RVLogin';
import Home from "./components/Home.js"; 
import LandownerRegister from "./components/registerforms/LandownerRegister.js"; 

function App() {
  return (
    <Router> 
    <div className="App">
      {/* Routes  */}
      <Route exact path="/" render={props => (
        <Home {...props}  />
      )} />
      <Route path="/rv" component={RVRegister} />
      <Route path="/landowners" component={LandownerRegister} />
       {/* PrivetRoutes  */}
       <PrivateRoute path="/login" component={LandownerLogin} />
      <PrivateRoute path="/rvlogin" component={RVLogin} />
    
    </div>
    </Router> 
  );
}

export default App;

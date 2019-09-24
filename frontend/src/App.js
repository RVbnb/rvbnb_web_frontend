import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import landownerRegister from './components/registerforms/LandownerRegister';
import RVRegister from './components/registerforms/RVRegister.js'; 
import LandownerLogin from './components/loginforms/LandownerLogin';
import PrivateRoute from './components/routes/PrivateRoute';
import RVLogin from "./components/loginforms/RVLogin.js"; 

function App() {
  return (
    <Router> 
    <div className="App">
      <div>
        <h1> Welcome To RVbnb  </h1>
        {/* Links */}
        <Link to="/register"> Register </Link>
        <Link to="/login"> Login </Link> {" "}
        <Link to="/rvregister"> RV Owner Register </Link>
        <Link to="/rvlogin"> Rv Login </Link> 
      </div>
      {/* Routes  */}
      <Route path="/register" component={landownerRegister} />
      <Route path ="/rvregister" component ={RVRegister} />
       {/* PrivetRoutes  */}
       <PrivateRoute path="/login" component={LandownerLogin} />
      <PrivateRoute path="/rvlogin" component={RVLogin} />
    
    </div>
    </Router> 
  );
}

export default App;

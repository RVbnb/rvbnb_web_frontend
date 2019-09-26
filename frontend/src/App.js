import React, {useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import RVRegister from './components/registerforms/RVRegister.js'; 
import PrivateRoute from './components/utilities/PrivateRoute';
import LandownerLogin from './components/loginforms/LandownerLogin';
import RVLogin from './components/loginforms/RVLogin';
import Home from "./components/Home.js"; 
import LandownerRegister from "./components/registerforms/LandownerRegister.js"; 
import LandownerForm from './components/landowners/LandownerForm';
import RVownersView from './components/rvowners/RVownersView';
import UpdateLandownerForm from './components/UpdateLandownerForm';

function App() {

  const [updateId, setUpdateId] = useState({})


console.log(updateId)
  return (
    <Router> 
    <div className="App">
      {/* Routes  */}
      <Route exact path="/" render={props => (
        <Home {...props}  />
      )} />
      <Route path="/rv" component={RVRegister} />
      <Route path="/landowners" component={LandownerRegister} />
      <Route path="/login" component={LandownerLogin} />
      <Route path="/rvlogin" component={RVLogin} />
       {/* PrivateRoutes  */}
       <PrivateRoute path="/landownerform" component={ LandownerForm } setUpdateId={setUpdateId} />
       <PrivateRoute path="/rvownersview" component={RVownersView} />
       <PrivateRoute path="/updatelandownerform" component={ UpdateLandownerForm } updateId={updateId} />
    
    </div>
    </Router> 
  );
}

export default App;

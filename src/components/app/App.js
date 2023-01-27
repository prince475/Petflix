import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch} from "react-router-dom"
import Dashboard from '../dashboard/Dashboard';
import Preference from '../preference/Prefrence';
import Login from '../login/Login';


function App() {
  const [token, setToken] = useState()
  
  if (!token) {
    return <Login setToken={setToken}/>
  }


  return (
    <div className='wrapper'>
      <h1>Appliction</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard"> <Dashboard/> </Route>
          <Route path="/preference"> <Preference/> </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';

import { useCookies } from 'react-cookie'

import React ,{useEffect} from 'react';

import{
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"


import Login from './Views/Login';
import Register from './Views/Register';
import Banner from './Views/Banner';
import NoMatch from './Views/NoMatch';

function App() {


  return (
    <Router>
     <div>
       <Switch>
       <Route exact path ="/">
           <Login/>
         </Route>
         <Route exact path ="/login">
           <Login/>
         </Route>
         <Route path ="/register">
           <Register/>
         </Route>
         <Route path ="/banner">
           <Banner/>
         </Route>
         <Route path ="*">
           <NoMatch/>
         </Route>
       </Switch>
     </div>
    </Router>
  );
}

export default App;

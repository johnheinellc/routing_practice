import logo from './logo.svg';
import './App.css';

import React from "react";
import {BrowserRouter,Switch,Route,Link } from "react-router-dom";
import Home from './components/Home';
import Numbers from './components/Numbers';
import Hello from './components/Hello';
import Colors from './components/Colors';
// import { useParams } from "react-router";


    
function App() {
  // const { int } = useParams();
  return (
    <BrowserRouter >
      <div className="App">
        <h1>Routing Example</h1>

        {/* Routes */}
        <p>
          <Switch>
            <Route exact path = "/home">
              <Home/>
            </Route>
            <Route exact path = "/:int">
              <Numbers/>
            </Route>
            <Route exact path = "/:txt">
              <Hello/>
            </Route>
            <Route exact path = "/:int/:font/:bg">
              <Colors/>
            </Route>
          </Switch>
        </p>
      </div>
    </BrowserRouter>
  );
}
    
export default App;

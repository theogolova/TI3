import { Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";


function App() {
  return (
    <>
    <Switch>
    <Route exact path="/" component={Home}/>
    </Switch>
    
    </>
  );
}

export default App;

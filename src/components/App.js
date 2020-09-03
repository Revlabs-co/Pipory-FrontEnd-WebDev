import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./login/Login";
import Signup1 from "./signup-1/Signup";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup/1" component={Signup1} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

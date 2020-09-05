import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import Login from "./login/Login";
import Signup1 from "./signup/signup-1/Signup";
import Signup2 from "./signup/signup-2/Signup-2";
import Signup3 from "./signup/signup-3/Signup-3";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup/1" component={Signup1} />
        <Route exact path="/signup/2" component={Signup2} />
        <Route exact path="/signup/3" component={Signup3} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Header, Center } from "./component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path="/">
            <Center />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import DemoHooks from "./HooksDemo/DemoHooks";
import DemoContext from "./ContextDemo/Demo";
import DemoCompound from "./CompoundComponent/DemoCompound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./FormikDemo/Homepage";

function App() {
  return (
    <div className="App">
      {/* <DemoHooks /> */}
      <Router>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </Router>
      {/* <DemoCompound /> */}
      {/* <DemoContext /> */}
    </div>
  );
}

export default App;

import React from "react";
import Introduction from "./components/Introduction";
import Classes from "./components/Classes";
import Datatypes from "./components/Datatypes";
import Projects from "./components/Projects";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <Switch>
          <Route path="/Introduction" exact component={Introduction} />
          <Route path="/Classes" exact component={Classes} />
          <Route path="/Datatypes" exact component={Datatypes} />
          <Route path="/Projects" exact component={Projects} />
        </Switch>
      </div>
    </Router>
  );
  }

export default App;

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.css";
import Teams from "./components/Teams";
import Players from "./components/Players";
import Leagues from "./components/Leagues";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path="/" component={Home} />
        <Route path="/teams" component={Teams} />
        <Route path="/players" component={Players} />
        <Route path="/leagues" component={Leagues} />
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

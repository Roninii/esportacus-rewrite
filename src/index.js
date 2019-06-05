import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles.css';
import Teams from './components/Teams';
import Players from './components/Players';
import Leagues from './components/Leagues';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={Teams} />
          <Route path="/players" component={Players} />
          <Route path="/leagues" component={Leagues} />
          <Route render={() => <h1>Uh oh! That page doesn't exist... yet?</h1>} />
        </Switch>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

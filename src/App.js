import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/home';
import './assets/sass/main.scss';
import PageRenderer from './PageRenderer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component ={ Home }/>
          <Route exact path="/:page" component={ PageRenderer } />
          <Route exact path='/lessons/:lesson' component={ PageRenderer } />
        </Switch>
      </div>
    </Router>
    
  );


}

export default App;

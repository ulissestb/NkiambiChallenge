import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Main from './pages/Main'
import Planets from './pages/Planets'

import './App.css';

function App() {
  return (
    <div className="App">
     <Switch>
       <Route exact path="/" component={Main} />
       <Route path="/planets" component={Planets} />
     </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Chips from './Chips';
import Sardines from './Sardines';
import Soda from './Soda';
import VendingMachine from './VendingMachine';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" render={() => <VendingMachine />} />
      <Route path="/chips" render={() => <Chips />} />
      <Route path="/sardines" render={() => <Sardines />} />
      <Route path="/soda" render={() => <Soda />} />
    </div>
  );
}

export default App;

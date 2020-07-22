import React from 'react';
import './App.css';
import vendingmachine from './vendingmachine.png';

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <img src={vendingmachine} alt="" className="App-Image" />
      <h1>Hello from VendingMachine</h1>
    </div>
  );
}

export default VendingMachine;
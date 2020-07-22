import React from 'react';
import './App.css';
import sardines from './sardines.gif'

function Sardines() {
  return (
    <div className="Sardines">
      <img className="Sardine-bg" src={sardines} alt=""/>
      <h4 className="Sardine-text">you don't eat the sardines. the sardines, they eat you!</h4>
    </div>
  );
}

export default Sardines;
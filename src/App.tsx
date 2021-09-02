import React from 'react';
import logo from './logo.svg';
import './App.css';
import CalcRoot from './components/CalcRoot';

function App() {
  return (
    <div style={{
      display: 'flex',
      width: window.innerWidth,
      height: window.innerHeight,
      justifyContent: 'center',
      alignItems: 'center',
      border: '5px solid black'
    }}>
      <CalcRoot/>
    </div>
  );
}

export default App;

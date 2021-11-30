import React from 'react';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  const cards = (() => <img src={logo} className="App-card" alt="logo" /> );
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Continue watching
        </p>
        <div>
        <img src={logo} className="App-card" alt="logo" />
        <img src={logo} className="App-card" alt="logo" />
        <img src={logo} className="App-card" alt="logo" />
        <img src={logo} className="App-card" alt="logo" />
        <img src={logo} className="App-logo" alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;

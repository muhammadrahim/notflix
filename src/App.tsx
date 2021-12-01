import React from 'react';
import './App.css';
import logo from './assets/logo.svg';
import you from './assets/you.png';
import queensgambit from './assets/queens-gambit.png';
import luther from './assets/luther.png';
import strangerthings from './assets/stranger-things.png';
import peakyblinders from './assets/peaky-blinders.png';
import rednotice from './assets/red-notice.png';
import squidgame from './assets/squid-game.png';

function App() {
  const cards = (<img src={logo} className="App-card" alt="logo" /> );

  const cards1 = (<img src={peakyblinders} className="App-card" alt="logo" /> );
  const cards2 = (<img src={luther} className="App-card" alt="logo" /> );
  const cards3 = (<img src={rednotice}  className="App-card" alt="logo" /> );
  const cards4 = (<img src={you} className="App-card" alt="logo" /> );
  const cards5 = (<img src={queensgambit} className="App-card" alt="logo" /> );
  const cards6 = (<img src={squidgame} className="App-card" alt="logo" /> );
  const cards7 = (<img src={strangerthings} className="App-card" alt="logo" /> );
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Continue watching
        </p>
       <div>
	{cards1}
	{cards2}
	{cards3}
	{cards4}
	{cards5}
	{cards6}
	{cards7}
	</div>
      </header>
    </div>
  );
}

export default App;

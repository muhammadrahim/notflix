import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './Card';
import MyList from './pages/MyList';
import NewAndPopular from './pages/NewAndPopular';
import Header from './components/Header';

const App = function () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<MyList />} />
        <Route exact path="/" element={<NewAndPopular />} />
      </Routes>
      <p>
        Continue watching
      </p>
      <Card />
    </div>
  );
};

export default App;

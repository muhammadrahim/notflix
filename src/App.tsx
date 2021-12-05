import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewAndPopular from './pages/NewAndPopular';
import MyList from './pages/MyList';
import Main from './pages/Main';
import Header from './components/Header';

const App = function () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/my-list" element={<MyList />} />
        <Route exact path="/new" element={<NewAndPopular />} />
      </Routes>
    </div>

  );
};

export default App;

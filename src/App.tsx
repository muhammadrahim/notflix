import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NewAndPopular from './pages/NewAndPopular';
import Main from './pages/Main';
import MyList from './pages/MyList';
import Auth from './Auth';
import Header from './components/Header';

const App = function () {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/new" element={<NewAndPopular />} />
        <Route path="/my-list" element={<MyList />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>

  );
};

export default App;

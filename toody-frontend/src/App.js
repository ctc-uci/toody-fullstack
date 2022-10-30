import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import './App.css';

// hard coded user
const firstName = 'Jennifer';
const lastName = 'Wong';
const stats = [
  { number: '50', description: 'Total Tasks' },
  { number: '80%', description: 'Tasks Complete' },
  { number: '5', description: 'Journal Entries' },
];

function App() {
  return (
    <Router>
      <div className="page-container">
        <Header />
        <div className="content-wrap">
          <Routes>
            <Route path="/" element={<Home name={firstName} />} />
            <Route
              path="/profile"
              element={<Profile firstName={firstName} lastName={lastName} stats={stats} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

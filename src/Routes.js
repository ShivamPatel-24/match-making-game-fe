import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Leaderboard from './components/Leaderboard';

const AllRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
    </Router>
  );
};

export default AllRoutes;

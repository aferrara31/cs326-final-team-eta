import React from 'react';
import NavBar from './NavBar';
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={<NavBar />} />
        <Route path="/navbar-wireframe" component={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;

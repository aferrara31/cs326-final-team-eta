import React from 'react';
import NavBar from './components/NavBar';
import Home from './components/Home';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/navbar-wireframe" element={<NavBar />} />
      </Routes>
    </Router>
  );
}

export default App;

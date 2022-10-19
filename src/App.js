import NavBar from './NavBar';
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/navbar-wireframe">
          <NavBar />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

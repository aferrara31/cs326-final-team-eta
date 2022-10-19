import NavBar from './NavBar';
import { Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/navbar-wireframe">
          <NavBar />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

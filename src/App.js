import logo from './logo.svg';
import './App.css';

import Home from './components/HomeComponent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



function About(){
  return (
    <div>
      <h2>Hello this is About</h2>
    </div>
  )
}

function Users(){
  return (
    <div>
      <h2>Hello this is Users</h2>
    </div>
  )
}


function App() {

  return (
    <Router>  
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path = "/about">
            <About />
          </Route>
          <Route path = "/users">
            <Users />
          </Route>
          <Route path = "/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  );
}

export default App;

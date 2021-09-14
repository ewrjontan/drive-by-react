import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

//import Home from './components/HomeComponent';
//import { BrowserRouter as Router, Switch, Route, Link, useHistory, useLocation } from 'react-router-dom';
import { Switch, Route, Link, useHistory, useLocation, Redirect } from 'react-router-dom';

import About from './components/AboutComponent';
import History from './components/HistoryComponent';

import Counter from "./components/CounterComponent";

import NewPage from './components/NewPageComponent';
import Users from './components/UsersComponent';


/*function Home(){
  const [searchInput, setInput] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  const history = useHistory();


  function handleSubmit(e){
    e.preventDefault();
    alert(`You are searching for ${searchInput}`);
    let newHistory = searchHistory;
    newHistory.push(searchInput);
    setSearchHistory(newHistory);
    console.log(searchHistory);
    history.push({
      pathname: '/about',
      state: {
        searchInput: searchInput
      }
    });
  }

  return (
    <div className="homeContainer">
      <h1>This is my home page</h1>
      <p>You searched {searchInput}</p>
      <form onSubmit={handleSubmit}>
        <input type='text' value={searchInput} onChange={e => setInput(e.target.value)}/>
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}*/




/*function Users(){
  return (
    <div>
      <h2>Hello this is Users</h2>
    </div>
  )
}*/


function App() {
  const [searchInput, setInput] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);
  const [clickCount, setClickCount] = useState(0);

  const history = useHistory();


  function handleSubmit(e){
    e.preventDefault();
    alert(`You are searching for ${searchInput}`);
    let newHistory = searchHistory;
    newHistory.push(searchInput);
    setSearchHistory(newHistory);
    console.log(searchHistory);
    history.push({pathname: '/about'});
  }

  function handleClick(){
    console.log('clicked');
    setClickCount(clickCount + 1);
  }

  return (
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
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to='/newpage'>New Page</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path = "/about" render={() => <About searchInput= {searchInput}/>}/>
        <Route path = "/history" render={()=> <History searchHistory={searchHistory}/>}/>
        <Route path="/newpage" component={NewPage}/>
        <Route path="/users" component={Users}/>


        <Route path = "/">
          {/*<Home />*/}
          <div className="homeContainer">
            <h1>This is my home page</h1>
            <p>You searched {searchInput}</p>
            <form onSubmit={handleSubmit}>
              <input type='text' value={searchInput} onChange={e => setInput(e.target.value)}/>
              <button type='submit'>Search</button>
            </form>


            <Counter clickCount = {clickCount}/>
            <h3>The count on App component is {clickCount}</h3>
            <button onClick={()=> handleClick()}>Click to count</button>
          </div>
        </Route>
        <Redirect to='/'/>
      </Switch>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function SpinningThing () {
  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  </div>
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/foo">
          <p>foo bar</p>
        </Route>
        <Route path="/*">
          <SpinningThing />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;

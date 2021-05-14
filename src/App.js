import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function SpinningThing () {
  return <div className="App">
      <header className="App-header">
        <Link to="foo"><
          img src={logo} className="App-logo" alt="logo" />
        </Link>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
  </div>
}

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/foo">
          <div className="App">
            <header className="App-header">
            <p>foo bar</p>
            <Link to="/">
              to home
            </Link>
            </header>
          </div>
        </Route>
        <Route path="/*">
          <SpinningThing />
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;

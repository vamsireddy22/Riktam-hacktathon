import './App.css';
import Login from './Login'
import Register from './Register'
import Home from './Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Upload from "./Upload";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <switch>
            <Route path="/" exact>
              <Home/>
            </Route>
            <Route path="/Login" exact>
              <Login/>
            </Route>
            <Route path="/Register" exact>
              <Register/>
            </Route>
            <Route path="/Upload" exact>
              <Upload/>
            </Route>
          </switch>
        </Router>  
      </header>
    </div>
  );
}

export default App;

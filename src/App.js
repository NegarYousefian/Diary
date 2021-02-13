import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import TODOpage from './pages/TODOpage';
function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/todo">
          <TODOpage />
        </Route>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;

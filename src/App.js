import './App.css';
import Layout from './components/Layout'
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from "./components/HOC/PrivateRoute"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/signup" exact component={Signup} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;

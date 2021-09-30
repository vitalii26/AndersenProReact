import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import User from "./hoc/User";
import PersonWithData from "./renderProp/Person";
import PlanetWithData from "./renderProp/Planet";
import HooksNav from "./components/HooksNav";
import "./App.css";

const getTodo = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return await response.json();
};

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="nav">
          <li>
            <NavLink to="/hoc">HOC</NavLink>
          </li>
          <li>
            <NavLink to="/renderProps">Render-props</NavLink>
          </li>
          <li>
            <NavLink to="/hooks">Hooks</NavLink>
          </li>
        </ul>
        <Switch>
          <Route path="/hoc">
            <User getData={getTodo} />
          </Route>
          <Route path="/renderProps">
            <PersonWithData />
            <PlanetWithData />
          </Route>
          <Route path="/hooks">
            <HooksNav />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

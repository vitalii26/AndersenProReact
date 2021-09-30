import { NavLink, Route, useRouteMatch, Switch } from "react-router-dom";
import ThemedButtonWrapper from "./Context";
import Timer from "./StateEffect";
import Callback from "./CallbackMemo";
import Counter from "./Reducer";
import ToggleButton from "../hooks/useToggle";

const HooksNav = () => {
  let { url } = useRouteMatch();

  return (
    <div>
      <ul className="nav">
        <li>
          <NavLink to={`${url}/context`}>Context</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/state-effect`}>State-effect</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/callback-memo`}>Callback-memo</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/reducer`}>Reducer</NavLink>
        </li>
        <li>
          <NavLink to={`${url}/custom-hook`}>Custom hook</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path={`${url}/context`} component={ThemedButtonWrapper} />
        <Route path={`${url}/state-effect`} component={Timer} />
        <Route path={`${url}/callback-memo`} component={Callback} />
        <Route path={`${url}/reducer`} component={Counter} />
        <Route path={`${url}/custom-hook`} component={ToggleButton} />
      </Switch>
    </div>
  );
};

export default HooksNav;

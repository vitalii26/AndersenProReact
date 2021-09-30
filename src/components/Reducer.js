import { useReducer } from "react";
import "./Reducer.css";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;
    default:
      throw new Error("Unexpected action");
  }
};

const Counter = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={"counter"}>
      <p>{count}</p>
      <button onClick={() => dispatch("increment")}>+1</button>
      <button onClick={() => dispatch("decrement")}>-1</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default Counter;

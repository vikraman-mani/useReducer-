import { useReducer, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let reducerFunction = (currentState, action) => {
    // Single function manange all action
    switch (action.type) {
      case "INCREMENT":
        return { ...currentState, count1: currentState.count1 + 1 }; // return Object  {key: Value}
      case "DECREMENT":
        return { ...currentState, count1: currentState.count1 - 1 };
      case "RESET":
        return { ...currentState, count1: 0 };
      default:
        return currentState;
    }
  };
  const [state, dispatch] = useReducer(reducerFunction, { count1: 0 });
  // console.log("state", state); // { count1: 0 }

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increase count is {count}
        </button>
      </div>

      {/* useReducer  */}

      <div className="card">
        <button
          onClick={() => {
            dispatch({ type: "INCREMENT" });
          }}
        >
          {" "}
          {/* dispatch function  /*/}
          Increase count{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "DECREMENT" });
          }}
        >
          Decrease count{" "}
        </button>
        <button
          onClick={() => {
            dispatch({ type: "RESET" });
          }}
        >
          Reset count{" "}
        </button>

        <p>{state.count1}</p>
      </div>
    </>
  );
}

export default App;

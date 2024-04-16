import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <h2>UseReducer Hook</h2>
      <p>Counter: {state}</p>
      <button
        onClick={() => {
          dispatch({ type: "inc" });
        }}
      >
        INC
      </button>
      <button
        onClick={() => {
          dispatch({ type: "dec" });
        }}
      >
        DEC
      </button>
    </div>
  );
};

export default UseReducer;

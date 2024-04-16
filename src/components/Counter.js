import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  } else if (action.type === "DEC") {
    return state - 1;
  }
  return state;
};

function Counter(props) {
  const [state, dispatch] = useReducer(reducer, props.count);

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>{state}</h3>
      <button
        type="button"
        className="btn btn-success"
        style={{ margin: "4px" }}
        onClick={() => {
          dispatch({ type: "INC" });
        }}
      >
        INC
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          dispatch({ type: "DEC" });
        }}
      >
        DEC
      </button>
    </div>
  );
}

export default Counter;

import React, { useCallback, useState } from "react";
import Child from "./Child";

const UseCallback = () => {
  const [state, setState] = useState(0);
  const clickHandler = () => {
    setState(state + 1);
  };
  const fun = useCallback(() => {
    console.log(state);
  }, [state]);
  return (
    <div>
      <h2>UseCallback Hook</h2>
      <button onClick={clickHandler}>Click {state}</button>
      <Child state={state} fun={fun} />
    </div>
  );
};

export default UseCallback;

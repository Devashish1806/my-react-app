import React from "react";
import { useState } from "react";

const UseState = () => {
  const [state, setState] = useState(false);
  const toggleState = () => {
    state ? setState(false) : setState(true);
  };
  return (
    <div>
      <h2>UseState Hook</h2>
      {state ? <p>True</p> : <p>False</p>}
      <button onClick={toggleState}>Click Me</button>
    </div>
  );
};

export default UseState;

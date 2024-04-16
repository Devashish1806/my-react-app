import { useState } from "react";
import React from "react";

function Memo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = (num) => {
    return num % 2 === 0;
  };

  return (
    <div className="container">
      <h3 style={{ textAlign: "center" }}>
        Counter One - {counterOne} is {isEven(counterOne) ? "Even" : "Odd"}
      </h3>
      <h3 style={{ textAlign: "center" }}>
        Counter Two - {counterTwo} is {isEven(counterTwo) ? "Even" : "Odd"}
      </h3>
      <button type="button" className="btn btn-success" onClick={incrementOne}>
        INC One
      </button>
      <button type="button" className="btn btn-danger" onClick={incrementTwo}>
        INC Two
      </button>
    </div>
  );
}

export default Memo;

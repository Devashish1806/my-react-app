import React, { useState } from "react";

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    let i = 0;
    while (i < 1000000) {
      i++;
    }
    setCounterOne(counterOne + 1);
  };
  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const isEven = (num) => {
    return num % 2 === 0;
  };

  return (
    <div>
      <h2>UseMemo Hook</h2>
      <h3 style={{ textAlign: "center" }}>
        Counter One - {counterOne} is {isEven(counterOne) ? "Even" : "Odd"}
      </h3>
      <h3 style={{ textAlign: "center" }}>
        Counter Two - {counterTwo} is {isEven(counterTwo) ? "Even" : "Odd"}
      </h3>
      <button type="button" onClick={incrementOne}>
        INC One
      </button>
      <button type="button" onClick={incrementTwo}>
        INC Two
      </button>
    </div>
  );
};

export default UseMemo;

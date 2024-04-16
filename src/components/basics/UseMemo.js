import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  // const isEven = (num) => {
  //   console.log("even called")
  //   let i = 0;
  //   while (i < 1000000000) {
  //     i++;
  //   }
  //   return num % 2 === 0;
  // };

  const isEven = useMemo(() => {
    console.log("even called");
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2>UseMemo Hook</h2>
      <h3 style={{ textAlign: "center" }}>
        Counter One - {counterOne} is {isEven ? "Even" : "Odd"}
      </h3>
      <h3 style={{ textAlign: "center" }}>Counter Two - {counterTwo}</h3>
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

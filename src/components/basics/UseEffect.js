import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [para, setPara] = useState("");
  useEffect(() => {
    setTimeout(() => {
      setPara("Use Effect Triggered");
    }, 2000);
  }, []);
  return (
    <div>
      <h2>UseEffect Hook</h2>
      <p>{para}</p>
    </div>
  );
};

export default UseEffect;

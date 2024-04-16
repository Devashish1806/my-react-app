import React, { memo } from "react";

const Child = ({state, fun}) => {
  console.log("Child rendered");
  return <div>Callback Child Component</div>;
};

export default memo(Child);

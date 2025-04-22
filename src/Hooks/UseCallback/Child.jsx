import React from "react";

const Child = ({ onClick }) => {
  console.log("child Rendered");
  return <button onClick={onClick}>Click ME</button>;
};

export default Child;

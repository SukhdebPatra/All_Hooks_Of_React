import React, { useLayoutEffect, useRef } from "react";

const UseLayoutEffect = () => {
  const divRef = useRef();

  useLayoutEffect(() => {
    const { height } = divRef.current.getBoundingClientRect();
    console.log("Div height:", height);
  }, []);

  return (
    <div ref={divRef} style={{ height: "100px" }}>
      Measure me
    </div>
  );
};

export default UseLayoutEffect;

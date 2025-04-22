import React, { useCallback, useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []); // Memoized, won't change unless dependencies change
  return (
    <div>
      <Child onClick={handleClick} />
      <button onClick={() => setCount(count + 1)}>Count : {count}</button>
    </div>
  );
};

export default Parent;

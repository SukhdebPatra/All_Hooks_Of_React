import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Calculating");
    return (
      Array(1000000)
        .fill()
        .reduce((sum) => sum + 1),
      count
    );
  }, [count]);
  return (
    <div>
      <p>Result :{expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseMemo;

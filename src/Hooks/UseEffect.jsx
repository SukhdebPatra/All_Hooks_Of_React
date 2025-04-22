import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return <div>{data ? data.name : "Loading..."}</div>;
};

export default UseEffect;

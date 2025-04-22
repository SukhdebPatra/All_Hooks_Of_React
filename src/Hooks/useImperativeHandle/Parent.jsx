import { useRef } from "react";
import Child from "./Child";

function Parent() {
  const childRef = useRef();
  return (
    <div>
      <Child ref={childRef} />
      <button onClick={() => childRef.current.focus()}>Focus Child</button>
    </div>
  );
}
export default Parent;

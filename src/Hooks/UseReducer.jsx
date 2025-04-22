import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <p>Count : {state.count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
    </div>
  );
};

export default UseReducer;

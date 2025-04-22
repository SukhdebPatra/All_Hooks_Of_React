import React, { forwardRef, useImperativeHandle, useRef } from "react";
const Child = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current.focus(),
  }));

  return <input ref={inputRef} />;
});

export default Child;

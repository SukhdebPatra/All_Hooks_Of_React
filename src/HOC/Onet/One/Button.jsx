import React from "react";
import { withClickTracking } from "./WithClickTracking";

const Button = (props) => {
  return <button>{props.label}</button>;
};

// Applying the HOC to the original component
export const ButtonWithClickTracking = withClickTracking(Button);

import React from "react";
import { withFancyText } from "./withFancyText";

const TextComponent = (props) => {
  return <p>{props.text}</p>;
};

export const FancyTextComponent = withFancyText(TextComponent);

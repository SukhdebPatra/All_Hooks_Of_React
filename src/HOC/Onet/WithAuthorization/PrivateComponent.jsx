import React from "react";
import WithAuthorization from "./WithAuthorization";
import { checkPermission } from "./checkPermission";

const PrivateComponent = () => {
  return <div>This is a Private Component, only visible to Admin Users.</div>;
};

export const PrivateComponentComponentWithAuthorization = WithAuthorization(
  PrivateComponent,
  checkPermission
);

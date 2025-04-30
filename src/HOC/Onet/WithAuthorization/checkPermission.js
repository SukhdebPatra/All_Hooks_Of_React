export const checkPermission = (props) => {
  return props.userRole === "admin";
};

export default function WithAuthorization(WrappedComponent, checkPerMissions) {
  return function (props) {
    return checkPerMissions(props) ? (
      <WrappedComponent />
    ) : (
      <p>Please log in appropriate role</p>
    );
  };
}

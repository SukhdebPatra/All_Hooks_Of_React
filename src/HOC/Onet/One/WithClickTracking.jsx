export const withClickTracking = (WrappedComponent) => {
  return (props) => {
    const handleClick = () => {
      console.log("Click tracked:", props.trackingInfo);
    };
    return (
      <div onClick={handleClick}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

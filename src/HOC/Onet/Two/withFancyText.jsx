export const withFancyText = (WrappedComponent) => {
  return (props) => {
    const fancyStyle = { fontStyle: "italic", fontWeight: "bold" };
    return (
      <div style={fancyStyle}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

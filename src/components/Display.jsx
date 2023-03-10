const Display = ({ result }) => {
  return <div className="display">{result == undefined ? 0 : result}</div>;
};

export default Display;

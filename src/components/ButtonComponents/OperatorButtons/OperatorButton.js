import React from "react";

const OperatorButton = (props) => {
  const {operators} = props;
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
    <button className="opButton">{operators}</button>
    </>
  );
};

export default OperatorButton;
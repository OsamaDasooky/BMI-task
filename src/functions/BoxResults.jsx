import React from "react";

export default function BoxResults(props) {
  return (
    <>
      <div className="row">
        <h3>BMI = {props.bmi}</h3>
      </div>
      <div className="row">
        <h3>{props.bmiClass}</h3>
      </div>
    </>
  );
}

import React from "react";

class BoxResults extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <h3>BMI = {this.props.bmi}</h3>
        </div>
        <div className="row">
          <h3>{this.props.bmiClass}</h3>
        </div>
      </>
    );
  }
}

export default BoxResults;

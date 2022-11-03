import React from "react";
import TextInput from "./TextInput.jsx";
import Button from "./Button.jsx";
import BoxResults from "./BoxResults.jsx";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // weight: 1,
      // height: 1,
      // bmiClass: "",
      // bmi: 1,
    };
  }
  computeBmi = () => {
    let bmiValue =
      (this.state.weight / this.state.height / this.state.height) * 10000;
    this.setState({ bmi: bmiValue });
    let bmiClass = this.getBmi(bmiValue);
    this.setState({ bmiClass: bmiClass });
  };
  getBmi(bmi) {
    if (bmi < 18.5) {
      return "Underweight";
    }
    if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight";
    }
    if (bmi >= 25 && bmi < 29.9) {
      return "Overweight";
    }
    if (bmi >= 30) {
      return "Obesity";
    }
  }
  weightChanged = (weightValue) => {
    console.log(weightValue);
    this.setState({ weight: weightValue });
  };

  heightChanged = (heightValue) => {
    this.setState({ height: heightValue });
  };

  render() {
    return (
      <div>
        <div className="row">
          <TextInput
            label="Height"
            placeholder="Enter height in meters"
            onChange={this.heightChanged}
          />
        </div>
        <div className="row">
          <TextInput
            label="Weight"
            placeholder="Enter weight in kg"
            onChange={this.weightChanged}
          />
        </div>
        <div className="row">
          <Button label="SUBMIT" onClick={this.computeBmi} />
        </div>
        <div>
          <BoxResults bmi={this.state.bmi} bmiClass={this.state.bmiClass} />
        </div>
      </div>
    );
  }
}
export default Form;

import React, { useState } from "react";
import TextInput from "../functions/TextInput";
import BoxResults from "../functions/BoxResults";
import Button from "../functions/Button";

export default function Form() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiClass, setBmiClass] = useState("");
  const [bmi, setBmi] = useState(0);

  const computeBmi = () => {
    let bmiValue = (weight / height / height) * 10000;
    setBmi(bmiValue);
    let bmiClass = getBmi(bmiValue);
    setBmiClass(bmiClass);
  };

  const getBmi = (bmi) => {
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
  };
  const weightChanged = (weightValue) => {
    setWeight(weightValue);
  };
  const heightChanged = (heightValue) => {
    setHeight(heightValue);
  };
  return (
    <div>
      <div className="row">
        <TextInput
          label="Height"
          placeholder="Enter height in meters"
          onChange={heightChanged}
        />
      </div>
      <div className="row">
        <TextInput
          label="Weight"
          placeholder="Enter weight in kg"
          onChange={weightChanged}
        />
      </div>
      <div className="row">
        <Button label="SUBMIT" onClick={computeBmi} />
      </div>
      <div>
        <BoxResults bmi={bmi} bmiClass={bmiClass} />
      </div>
    </div>
  );
}

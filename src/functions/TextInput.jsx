import React, { useState } from "react";

export default function TextInput(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    let inputValue = event.target.value;
    setValue(inputValue);
    props.onChange(inputValue);
  };
  return (
    <div>
      <label>{props.label}</label>
      <input
        type="text"
        value={value}
        placeholder={props.placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

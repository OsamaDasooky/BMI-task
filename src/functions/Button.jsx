import React from "react";

export default function Button(props) {
  return <div onClick={props.onClick}>{props.label}</div>;
}

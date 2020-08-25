import React from "react";

function ButtonOnTheTop(props) {
  function handleClick() {
    props.func(props.stateBtn);
  }

  return <button onClick={handleClick}>{props.stateBtn}</button>;
}
export default ButtonOnTheTop;

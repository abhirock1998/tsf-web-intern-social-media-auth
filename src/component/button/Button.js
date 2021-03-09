import React from "react";
import "./button.css";
import { Button } from "@material-ui/core";
function ButtonComponent({
  title = "Log In",
  src = "https://i.pinimg.com/originals/81/8f/f7/818ff7a3edc40836182c585939fbe82a.png",
  click,
  id,
}) {
  return (
    <div id={id} className="tsf__button">
      <img src={src} alt={title} />
      <Button onClick={click}>{title}</Button>
    </div>
  );
}

export default ButtonComponent;

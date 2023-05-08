import React from "react";
import classes from "./style/Button.module.css";
const Button = ({ children }) => {
  return (
    <button className={classes.button}>
      <h4>{children}</h4>
    </button>
  );
};
export default Button;

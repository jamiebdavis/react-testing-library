import React from "react";
import "./button.css";

const Button = ({ label }) => {
  return (
    <button className="button" data-testid="button">
      {label}
    </button>
  );
};

export default Button;

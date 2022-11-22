import React from 'react';
import s from "./Button.module.css";

interface ButtonInterface {
  color: string;
  title: string;
}
const Button = ({ color, title }: ButtonInterface) => {
  const yellowStyle = {
    border: "1px solid #FFCF00",
    color: "#988B49",
    background: "rgba(255, 207, 0, 0.15)",
  };
  const blueStyle = {
    border: "1px solid rgba(85, 105, 158, 0.3)",
    color: "#55699E",
    background: "rgba(161, 177, 219, 0.317343)",
  };

  return (
    <button
      style={color === "yellow" ? yellowStyle : blueStyle}
      className={s.button}
    >
      {title}
    </button>
  );
};

export default Button;
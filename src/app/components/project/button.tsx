"use client";
import React from "react";
import ShowAlert, { AlertOptions } from "../utils/sweet-alert"; // Ajusta la ruta según la ubicación de tu archivo

interface ButtonProps {
  text: string;
  alertOptions: AlertOptions;
}

const ButtonR: React.FC<ButtonProps> = ({ text, alertOptions }) => {
  const handleClick = () => {
    ShowAlert(alertOptions);
  };

  return (
    <button
      onClick={handleClick}
      className="my-3 bg-textcolorv/80 text-slate-50 font-bold px-2 p-0.5 rounded-md text-center items-center hover:bg-textcolorv hover:text-slate-50 transition duration-1000 md:hover:scale-110"
    >
      {text}
    </button>
  );
};

export default ButtonR;

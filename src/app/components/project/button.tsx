"use client";
import React from "react";

interface ButtonProps {
  text: string;
  url?: string;
}

const ButtonR: React.FC<ButtonProps> = ({ text, url }) => {
  const handleButtonClick = (): void => {
    if (url) {
      window.open(url, "_blank");
    } else {
      alert("URL not available");
    }
  };
  return (
    <button
      onClick={handleButtonClick}
      className="my-3 bg-textcolorv/80 text-slate-50 font-bold px-2 p-0.5 rounded-md text-center items-center hover:bg-textcolorv hover:text-slate-50 transition duration-1000 md:hover:scale-110"
    >
      {text}
    </button>
  );
};

export default ButtonR;

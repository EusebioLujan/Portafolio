import React, { useState } from "react";

interface MenuProps {
  onToggle: () => void;
  isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ onToggle, isOpen }) => {
  return (
    <div className="md:hidden cursor-pointer px-8" onClick={onToggle}>
      <div
        className={`h-1 w-6 my-1 bg-textcolorv transition-transform transform ${
          isOpen ? "rotate-45 translate-y-2" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-6 my-1 bg-textcolorv transition-opacity ${
          isOpen ? "opacity-0" : ""
        }`}
      ></div>
      <div
        className={`h-1 w-6 my-1 bg-textcolorv transition-transform transform ${
          isOpen ? "-rotate-45 -translate-y-2" : ""
        }`}
      ></div>
    </div>
  );
};

export default Menu;

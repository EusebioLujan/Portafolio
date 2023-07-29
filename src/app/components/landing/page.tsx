'use client'
import React, { useState, useEffect } from "react";

export default function Landing() {
  const [currentLine, setCurrentLine] = useState(0);
  const lines = [
    { text: "Hola, soy", delay: 2000 },
    { text: "Marcelo Lujan", delay: 3000 },
    { text: "Front-End Developer", delay: 4000 },
  ];

  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setCurrentLine((prevLine) => prevLine + 1);
      }, lines[currentLine].delay);
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  return (
    <>
      <div className="flex justify-center items-center px-10 min-h-[91.4vh]">
        <div className="flex flex-col w-8/12 mt-10 items-center justify-center text-center">
          <div className="text-5xl mx-16 pb-52 pl-20 text-column">
            {lines.map((line, index) => (
              <span
                key={index}
                className={`font-normal text-textcolorv typing-animation delay-${index + 1} ${
                  currentLine >= index ? "show-text" : "hidden-text"
                }`}
              >
                {line.text}
              </span>
            ))}
          </div>
        </div>
        <div className="w-4/12 h-96 flex justify-center items-center bg-slate-100">a</div>
      </div>
    </>
  );
}

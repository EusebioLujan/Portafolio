"use client";
import React from "react";

export default function Landing() {
  return (
    <>
      <div
        id="inicio"
        className=" min-h-[90vh] w-full flex flex-col justify-center text-center m-auto"
      >
        <div className="w-10/12 flex flex-col justify-center m-auto">
          <div className="md:text-5xl text-2xl space-y-10 text-center flex flex-col justify-center">
            <span className="md:text-8xl  text-4xl font-bold text-textcolorv text-shadow-white">
              Marcelo Lujan
            </span>
            <span className="text-textcolorv font-bold">Front-End Developer</span>
          </div>
        </div>
      </div>
    </>
  );
}

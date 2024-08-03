"use client";

import React from "react";
import ProjectList from "./card";
import projectsData from "../utils/data.json";

export default function Project() {
  return (
    <>
      <p id="proyectos" className="my-28 text-[#0F212E]">
        {"a"}
      </p>
      <div className=" w-full">
        <h1 className="text-shadow-white text-4xl md:text-6xl font-bold text-center mb-20">
          Proyectos
        </h1>
        <div className="flex flex-col md:justify-around my-10 md:items-center">
          <div className="md:w-8/12">
            <ProjectList Projects={projectsData.projects} />
          </div>
        </div>
      </div>
    </>
  );
}

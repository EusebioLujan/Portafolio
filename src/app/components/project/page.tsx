"use client";

import React from "react";
import Image from "next/image";
import meme3 from "../../../../public/meme3.png";
import meme2 from "../../../../public/meme2.png";
import Link from "next/link";
import ProjectList from "./card";
import projectsData from "../utils/data.json";
export default function Project() {
  return (
    <>
      <p id="proyectos" className="my-20 text-[#0F212E]">
        {"a"}
      </p>
      <div className=" w-full">
        <h1 className="text-shadow-white text-4xl md:text-6xl font-bold text-center underline mb-20">
          Proyectos
        </h1>
        {/* proyecto 1 */}
        <div className="flex flex-col md:justify-around my-10 md:items-center">
          <div className="md:w-8/12">
            <ProjectList projects={projectsData.projects} />
          </div>
        </div>
      </div>
    </>
  );
}

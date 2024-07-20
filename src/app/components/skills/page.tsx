"use client";
import React from "react";
import css from "../../../../public/css.png";
import html from "../../../../public/html-5.png";
import js from "../../../../public/javascript.png";
import ts from "../../../../public/typescript.png";
import rx from "../../../../public/Redux.png";
import figma from "../../../../public/figma2.png";
import Image from "next/image";

export default function Skills() {
  return (
    <>
      <p id="skills" className="my-20 text-[#0F212E]">
        a
      </p>
      <div className=" w-11/12 md:w-10/12 sm:px-10 m-auto">
        <h1 className="text-shadow-white text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-8 sm:mb-20 md:mb-40">
          Skills
        </h1>
        <div className="flex flex-col justify-center items-center space-y-10">
        <div className="bg-[#015560]/50 shadow-[#015560] md:w-full h-auto flex flex-col shadow-neon text-center items-center md:px-2 rounded-ss-3xl rounded-ee-3xl border-2 border-[#015560] pt-8">
          <div className="flex flex-wrap justify-center items-center m-auto relative z-40">
            <div className="flex flex-wrap justify-center gap-5 px-2">
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={css}
                alt="CSS"
              />
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={html}
                alt="HTML"
              />
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={js}
                alt="JS"
              />
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={ts}
                alt="TS"
              />
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={rx}
                alt="RX"
              />
              <Image
                className="bg-slate-100 rounded-2xl h-16 w-16 md:h-32 md:w-32"
                src={figma}
                alt="FIGMA"
              />
            </div>
          </div>
          <div className="px-4 py-10 sm:px-0 md:w-8/12 lg:w-8/12 text-lg sm:text-xl md:text-2xl flex justify-center items-center text-center m-auto ">
            <h1>
              Mis fortalezas radican en que me concentro en encontrar incluso
              los errores más pequeños y no descanso hasta solucionarlos. Me
              gusta entregar los proyectos en tiempo y forma para cumplir
              siempre con mi rol. He participado en proyectos muy grandes que
              han forjado mi autonomía y habilidades de desarrollo. Además,
              tengo conocimientos en UX/UI y utilizo herramientas como Figma
              para diseñar páginas web con una visión orientada al usuario.
            </h1>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

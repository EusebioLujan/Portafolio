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
      <div className="min-h-screen px-10 m-auto">
        <h1 className=" text-4xl md:text-6xl font-bold text-center underline mb-20 md:mb-40">
          Skills
        </h1>
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col md:flex-wrap w-6/12 justify-center items-center m-auto relative z-40">
            <div className="flex space-x-5 my-5 items-center justify-center">
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={css}
                alt="CSS"
              />
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={html}
                alt="HTML"
              />
            </div>
            <div className="flex space-x-5 my-5 items-center justify-center">
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={js}
                alt="JS"
              />
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={ts}
                alt="TS"
              />
            </div>
            <div className="flex space-x-5 my-5 items-center justify-center">
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={rx}
                alt="RX"
              />
              <Image
                className="bg-slate-100 rounded-2xl md:h-40 md:w-40 h-20 w-20"
                src={figma}
                alt="FIGMA"
              />
            </div>
          </div>
          <div className="md:w-6/12 md:text-2xl flex justify-center items-center text-center">
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
    </>
  );
}

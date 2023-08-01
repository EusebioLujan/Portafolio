"use client";
import React from "react";
import css from "../../../../public/css.png"
import html from "../../../../public/html-5.png"
import js from "../../../../public/javascript.png"
import ts from "../../../../public/typescript.png"
import rx from "../../../../public/Redux.png"
import figma from "../../../../public/figma2.png"
import Image from "next/image";

export default function Skills() {
  return (
    <>
    <div className="z-40 relative">
    <p id="skills" className="my-20 text-[#0F212E]">a</p>
      <div  className="min-h-screen px-10">
      <h1 className="text-6xl font-bold text-center underline mb-40">Skills</h1>
    
        <section className="flex flex-col w-6/12 justify-center items-center m-auto">
          <Image className="bg-slate-100 rounded-2xl h-10 w-10" src={css} alt="CSS"/>
          <Image className="bg-slate-100 rounded-2xl" src={html} alt="HTML"/>
          <Image className="bg-slate-100 rounded-2xl" src={js} alt="JS"/>
          <Image className="bg-slate-100 rounded-2xl" src={ts} alt="TS"/>
          <Image className="bg-slate-100 rounded-2xl" src={rx} alt="RX"/>
          <Image className="bg-slate-100 rounded-2xl" src={figma} alt="FIGMA"/>
        </section>
        <div className="md:w-6/12 md:text-2xl">
        <h1>
          Mis fortalezas radican en que me concentro en encontrar incluso los
          errores más pequeños y no descanso hasta solucionarlos. Me gusta
          entregar los proyectos en tiempo y forma para cumplir siempre con mi
          rol. He participado en proyectos muy grandes que han forjado mi
          autonomía y habilidades de desarrollo. Además, tengo conocimientos en
          UX/UI y utilizo herramientas como Figma para diseñar páginas web con
          una visión orientada al usuario.
        </h1>
        </div>
      </div>
      </div>
    </>
  );
}

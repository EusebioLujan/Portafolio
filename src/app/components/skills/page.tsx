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
    <p id="skills" className="my-20 text-[#0F212E]">a</p>
      <div  className="min-h-screen px-10">
      <h1 className="text-6xl font-bold text-center underline mb-40">Skills</h1>
      <article className="w-full flex ">
        <div className="w-6/12 items-center flex pl-20">
        <section className="w-28 flex space-x-2">
          <Image className="bg-slate-100 rounded-2xl" src={css} alt="CSS"/>
          <Image className="bg-slate-100 rounded-2xl" src={html} alt="HTML"/>
          <Image className="bg-slate-100 rounded-2xl" src={js} alt="JS"/>
          <Image className="bg-slate-100 rounded-2xl" src={ts} alt="TS"/>
          <Image className="bg-slate-100 rounded-2xl" src={rx} alt="RX"/>
          <Image className="bg-slate-100 rounded-2xl" src={figma} alt="FIGMA"/>
        </section>
        </div>
        <div className="w-6/12 pr-28 pt-10 text-2xl">
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
      </article>
    </div>
    </>
  );
}
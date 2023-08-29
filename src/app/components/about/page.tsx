"use client";
import Image from "next/image";
import React from "react";
import about from "../../../../public/imageabout.jpg";
export default function About() {
  return (
    <>
    <p id="sobre-mi" className="my-20 md:my-1 text-[#0F212E] text-none">a</p>
      <div  className=" w-10/12 min-h-screen px-10 flex flex-col justify-center items-center m-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-center underline  mb-20 md:mb-40">Sobre Mí</h1>
        <div className=" flex items-center flex-col md:flex-row md:justify-around md:w-10/12">
          <div className="w-10/12 relative z-40 flex justify-center">
            <Image
              className="rounded-full w-full md:w-7/12"
              src={about}
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className=" w-[250px] sm:w-full md:w-6/12 text-justify pt-8">
            <h1 className="text-xl md:text-2xl">
              Tengo experiencia en HTML, CSS, lenguajes como JS y TS,
              frameworks como Next.js y Vue.js, y librerías como Tailwind CSS y
              Redux, entre otros. Me apasiona ver cómo, con un par de cambios en
              el código, puedes ver los resultados en tiempo real y cómo
              evoluciona todo. Comencé en el Front-End gracias a mi pareja,
              quien me ha ayudado a seguir adelante en esto. Me encanta el
              Front-End y, gracias a mi perspectiva detallista, puedo encontrar
              las diferencias en cualquier cosa.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

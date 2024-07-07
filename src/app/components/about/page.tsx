"use client";
import Image from "next/image";
import React from "react";
import about from "../../../../public/imageabout.jpg";

export default function About() {
  return (
    <>
      <p id="sobre-mi" className="my-28 md:my-1 text-[#0F212E] text-none">
        a
      </p>
      <div className="w-11/12 sm:w-10/12 min-h-screen px-4 sm:px-10 flex flex-col justify-center items-center m-auto">
        <h1 className="text-shadow-white text-3xl sm:text-4xl md:text-6xl font-bold text-center underline mb-10 sm:mb-20 md:mb-40">
          Sobre Mí
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:justify-around lg:w-10/12 ">
          <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12 flex justify-center">
            <Image
              className="rounded-full w-8/12 sm:w-6/12 md:w-8/12 "
              src={about}
              alt="image"
              width={500}
              height={500}
            />
          </div>
          <div className="w-full md:w-10/12 lg:w-6/12 text-justify pt-8 lg:pt-0">
            <h1 className="text-lg sm:text-xl md:text-2xl">
              Tengo experiencia en HTML, CSS, lenguajes como JS y TS, frameworks
              como Next.js y Vue.js, y librerías como Tailwind CSS y Redux,
              entre otros. Me apasiona ver cómo, con un par de cambios en el
              código, puedes ver los resultados en tiempo real y cómo evoluciona
              todo. Comencé en el Front-End gracias a mi pareja, quien me ha
              ayudado a seguir adelante en esto. Me encanta el Front-End y,
              gracias a mi perspectiva detallista, puedo encontrar las
              diferencias en cualquier cosa.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

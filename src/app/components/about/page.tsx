"use client";
import Image from "next/image";
import React from "react";
import about from "../../../../public/imageabout.jpg";
export default function About() {
  return (
    <>
    <p id="sobre-mi" className="my-20 text-[#0F212E] text-transparent">a</p>
      <div  className=" w-10/12 px-10 flex flex-col justify-center items-center m-auto">
        <h1 className="text-6xl font-bold text-center underline mb-20">Sobre Mí</h1>
        <div className=" flex items-center justify-around w-full">
          <div className="w-5/12">
            <Image
              className="rounded-full "
              src={about}
              alt="image"
              width={600}
              height={600}
            />
          </div>
          <div className="w-5/12">
            <h1 className=" text-2xl">
              Soy
              <span className="text-hoverorange">
                {" "}
                Marcelo Lujan y soy desarrollador Front-End
              </span>
              . Tengo experiencia en HTML, CSS, lenguajes como JS y TS,
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

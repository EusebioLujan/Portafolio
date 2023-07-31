"use client";
import Image from "next/image";
import React from "react";
import emercado from "../../../../public/emercado.png";
import Link from "next/link";
export default function Project() {
  return (
    <>
      <p id="proyectos" className="my-20 text-[#0F212E]">
        {"a"}
      </p>
      <div className="min-h-screen px-10 w-full">
        <h1 className="text-6xl font-bold text-center underline mb-20">
          Proyectos
        </h1>
        {/* proyecto 1 */}
        <div className="flex flex-col md:justify-around">
          <div className="flex flex-col w-6/12">
            <h1 className="text-4xl">E-Mercado</h1>
            <div className="bg-slate-500/50 w-full rounded-xl">
              El proyecto de E-Mercado es una tienda en línea creada desde cero
              utilizando únicamente HTML y CSS para diseñar y maquetar la
              interfaz del sitio web. El objetivo principal es mostrar productos
              de diferentes categorías y permitir a los usuarios navegar por el
              catálogo de productos, visualizar detalles de cada artículo y
              agregar los productos seleccionados al carrito de compras. Es un
              proyecto en construcción, a medida que se vaya mejorando agregare
              imagenes
            </div>
          </div>
          <div className="bg-[#015560]/50 shadow-lg shadow-[#015560] w-4/12 h-64 rounded-r-2xl rounded-br-2xl flex items-end justify-end">
            <div className="bg-slate-100 w-11/12 h-56 rounded-ss-2xl rounded-br-2xl flex justify-center items-center">
              <Link href={"https://eusebiolujan.github.io/workspaceinicial-JaP/"} target="_blank"><Image
                className="w-full h-full"
                src={emercado}
                alt="MERCADO"
                width={500}
                height={500}
              /></Link>
              
            </div>
          </div>
        </div>
        {/* proyecto 2 */}
        <div className="flex flex-col md:justify-around">
          <div className="flex flex-col w-6/12">
            <h1 className="text-4xl">Ejemplo de Proyecto</h1>
            <div className="bg-slate-500/50 w-full rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis eum inventore dolor, quod accusantium necessitatibus
              esse laboriosam harum saepe, possimus quia sunt ullam labore rerum
              fuga illo aut magnam officiis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Vitae commodi aperiam odio ipsam
              iusto aut, illo perferendis rem ipsa aliquid similique provident
              quisquam quidem accusantium laudantium asperiores error sint
              rerum.
            </div>
          </div>
          <div className="bg-[#015560]/50 shadow-lg shadow-[#015560] w-4/12 h-64 rounded-r-2xl rounded-br-2xl flex items-end justify-end">
            <div className="bg-slate-100 w-11/12 h-56 rounded-ss-2xl rounded-br-2xl flex justify-center items-center"></div>
          </div>
        </div>
        {/* proyecto 3 */}
        <div className="flex flex-col md:justify-around">
          <div className="flex flex-col w-6/12">
            <h1 className="text-4xl">Ejemplo de Proyecto</h1>
            <div className="bg-slate-500/50 w-full rounded-xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis eum inventore dolor, quod accusantium necessitatibus
              esse laboriosam harum saepe, possimus quia sunt ullam labore rerum
              fuga illo aut magnam officiis? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Vitae commodi aperiam odio ipsam
              iusto aut, illo perferendis rem ipsa aliquid similique provident
              quisquam quidem accusantium laudantium asperiores error sint
              rerum.
            </div>
          </div>
          <div className="bg-[#015560]/50 shadow-lg shadow-[#015560] w-4/12 h-64 rounded-r-2xl rounded-br-2xl flex items-end justify-end">
            <div className="bg-slate-100 w-11/12 h-56 rounded-ss-2xl rounded-br-2xl flex justify-center items-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

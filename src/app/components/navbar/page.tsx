"use client";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className=" min-h-[80px] items-center flex justify-center  text-white text-xl font-semibold sticky top-0 z-50 px-10 backdrop-blur-md bg-gray-700/50">
        <div className="flex items-center justify-around min-h-[80px] w-10/12 ">
          <Link href="/">
            <span className="hover:text-hoverorange hover:underline">
              Inicio
            </span>
          </Link>
          <Link href="#sobre-mi">
            <span className="hover:text-hoverorange hover:underline">
              Sobre mi
            </span>
          </Link>
          <Link href="#skills">
            <span className="hover:text-hoverorange hover:underline">
              Skills
            </span>
          </Link>
          <Link href="#proyectos">
            <span className="hover:text-hoverorange hover:underline">
              Proyectos
            </span>
          </Link>
          <Link href="#contacto">
            <span className="hover:text-hoverorange hover:underline">
              Contacto
            </span>
          </Link>
        </div>
      </nav>
      
    </>
  );
}

"use client";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./menu";


export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="md:min-h-[80px] min-h-[60px] items-center flex justify-center w-full text-white md:text-xl text-sm px-2 font-semibold sticky top-0 z-50 md:px-10 backdrop-blur-md bg-gray-700/50">
      <div className="flex items-center justify-between md:min-h-[80px] min-h-[60px] md:w-10/12 w-full">
        <Menu onToggle={toggleMenu} isOpen={isMenuOpen} />
        {/* Menú desplegable */}
        <div
          className={`md:hidden fixed bottom-0 left-0 w-full text-center backdrop-blur-md bg-gray-700/95 text-lg h-52 p-1 transition-opacity top-14 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href="/">
            <span className="block my-3 text-textcolorv">Inicio</span>
          </Link>
          <Link href="#sobre-mi">
            <span className="block my-3 text-textcolorv">Sobre mi</span>
          </Link>
          <Link href="#skills">
            <span className="block my-3 text-textcolorv">Skills</span>
          </Link>
          <Link href="#proyectos">
            <span className="block my-3 text-textcolorv">Proyectos</span>
          </Link>
          <Link href="#contacto">
            <span className="block my-3 text-textcolorv">Contacto</span>
          </Link>
        </div>
        {/* Menú normal */}
        <div className={`hidden md:flex items-center justify-around w-full ${isMenuOpen ? "md:flex" : ""}`}>
          <Link href="/">
            <span className="md:hover:text-hoverorange md:hover:underline">
              Inicio
            </span>
          </Link>
          <Link href="#sobre-mi">
            <span className="md:hover:text-hoverorange md:hover:underline">
              Sobre mi
            </span>
          </Link>
          <Link href="#skills">
            <span className="md:hover:text-hoverorange md:hover:underline">
              Skills
            </span>
          </Link>
          <Link href="#proyectos">
            <span className="md:hover:text-hoverorange md:hover:underline">
              Proyectos
            </span>
          </Link>
          <Link href="#contacto">
            <span className="md:hover:text-hoverorange md:hover:underline">
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

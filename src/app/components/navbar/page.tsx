"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Menu from "./menu";

export default function NavBar(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (section: string): void => {
    setActive(section);
    setIsMenuOpen(false); 
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre-mi', 'skills', 'proyectos', 'contacto'];
      const scrollPosition = window.scrollY;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionHeight = element.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="md:min-h-[80px] min-h-[60px] items-center flex justify-center w-full text-white md:text-xl text-sm px-2 font-semibold sticky top-0 z-50 md:px-10 backdrop-blur-md bg-gray-700/20">
      <div className="flex items-center justify-between md:min-h-[80px] min-h-[60px] md:w-10/12 w-full">
        <Menu onToggle={toggleMenu} isOpen={isMenuOpen} />
        {/* Menú desplegable */}
        <div
          className={`md:hidden fixed bottom-0 left-0 w-full text-center backdrop-blur-md bg-gray-700/95 text-lg h-52 p-1 transition-opacity top-14 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href="#" onClick={() => handleClick("inicio")}>
            <span className={`block my-3 ${active === "inicio" ? "text-textcolorv" : "text-textcolorv"} hover:text-shadow-white`}>Inicio</span>
          </Link>
          <Link href="#sobre-mi" onClick={() => handleClick("sobre-mi")}>
            <span className={`block my-3 ${active === "sobre-mi" ? "text-textcolorv" : "text-textcolorv"}`}>Sobre mi</span>
          </Link>
          <Link href="#skills" onClick={() => handleClick("skills")}>
            <span className={`block my-3 ${active === "skills" ? "text-textcolorv" : "text-textcolorv"}`}>Skills</span>
          </Link>
          <Link href="#proyectos" onClick={() => handleClick("proyectos")}>
            <span className={`block my-3 ${active === "proyectos" ? "text-textcolorv" : "text-textcolorv"}`}>Proyectos</span>
          </Link>
          <Link href="#contacto" onClick={() => handleClick("contacto")}>
            <span className={`block my-3 ${active === "contacto" ? "text-textcolorv" : "text-textcolorv"}`}>Contacto</span>
          </Link>
        </div>
        {/* Menú normal */}
        <div className={`hidden md:flex items-center justify-around w-full ${isMenuOpen ? "md:flex" : ""}`}>
          <Link href="#" onClick={() => handleClick("inicio")}>
            <span className={`md:hover:text-textcolorv md:hover:text-shadow-white transition duration-750 md:hover:scale-110 ${active === "inicio" ? "text-textcolorv" : ""}`}>
              Inicio
            </span>
          </Link>
          <Link href="#sobre-mi" onClick={() => handleClick("sobre-mi")}>
            <span className={`md:hover:text-textcolorv md:hover:text-shadow-white transition duration-750 md:hover:scale-110 ${active === "sobre-mi" ? "text-textcolorv" : ""}`}>
              Sobre mi
            </span>
          </Link>
          <Link href="#skills" onClick={() => handleClick("skills")}>
            <span className={`md:hover:text-textcolorv md:hover:text-shadow-white transition duration-750 md:hover:scale-110 ${active === "skills" ? "text-textcolorv" : ""}`}>
              Skills
            </span>
          </Link>
          <Link href="#proyectos" onClick={() => handleClick("proyectos")}>
            <span className={`md:hover:text-textcolorv md:hover:text-shadow-white transition duration-750 md:hover:scale-110 ${active === "proyectos" ? "text-textcolorv" : ""}`}>
              Proyectos
            </span>
          </Link>
          <Link href="#contacto" onClick={() => handleClick("contacto")}>
            <span className={`md:hover:text-textcolorv md:hover:text-shadow-white transition duration-750 md:hover:scale-110 ${active === "contacto" ? "text-textcolorv" : ""}`}>
              Contacto
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

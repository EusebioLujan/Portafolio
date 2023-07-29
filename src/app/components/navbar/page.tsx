"use client";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <>
      <nav className="bg-bgnav min-h-[80px] text-white text-xl font-semibold sticky top-0 z-50 shadow-lg px-10">
        <div className="flex items-center justify-around min-h-[80px]">
          <Link href="#inicio">
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

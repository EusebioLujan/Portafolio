"use client";
import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className="fixed md:bottom-2 bottom-8 -right-4 sm:-right-4 md:-right-20 lg:-right-40 xl:-right-60 flex items-center w-5/12 justify-center mr-10 z-40">
        <div className="absolute inset-0 bg-gray-700/95 backdrop-blur-md rounded-full block md:hidden z-30 w-full"></div>

        <a
          href="https://github.com/EusebioLujan"
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-white text-textcolorv mr-4 hover:text-textcolorv hover:scale-110 z-40"
        >
          <FaGithub size={50} />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=099249289"
          target="_blank"
          rel="noopener noreferrer"
          className="md:text-white text-textcolorv hover:text-textcolorv hover:scale-110 z-40"
        >
          <FaWhatsapp size={55} />
        </a>
      </div>
    </>
  );
}

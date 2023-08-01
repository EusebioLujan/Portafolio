"use client";
import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className="fixed md:bottom-4 bottom-16 right-1 flex items-center w-2/12 justify-center mr-10 z-40">
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

"use client";
import React from "react";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

export default function SocialMedia() {
  return (
    <>
      <div className="fixed bottom-4 right-4 flex items-center w-4/12 justify-center mr-10">
          <a
            href="https://github.com/EusebioLujan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mr-4 hover:text-textcolorv hover:scale-110"
          >
            <FaGithub size={50} />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=099249289"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-textcolorv hover:scale-110"
          >
            <FaWhatsapp size={55} />
          </a>
        </div>
    </>
  );
}

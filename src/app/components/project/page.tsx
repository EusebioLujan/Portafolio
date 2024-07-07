"use client";
import Image from "next/image";
import React from "react";
import meme from "../../../../public/meme.png";
import Link from "next/link";
export default function Project() {
  return (
    <>
      <p id="proyectos" className="my-20 text-[#0F212E]">
        {"a"}
      </p>
      <div className="min-h-screen px-10 w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-center underline mb-20">
          Proyectos
        </h1>
        {/* proyecto 1 */}
        <div className="flex flex-col md:justify-around my-10 md:items-center">
          <div className="flex flex-col md:w-6/12">
            <h1 className="text-4xl">lorem ipsum</h1>
            <div className="md:flex md:space-x-4">
              <div className="bg-[#015560]/50 shadow-lg my-2 shadow-[#015560] md:w-10/12 h-96 rounded-r-2xl rounded-br-2xl flex items-end justify-end">
                <div className="bg-slate-100 w-11/12 h-full rounded-ss-2xl rounded-br-2xl flex justify-center items-center overflow-hidden">
                  <Link
                    href={"https://eusebiolujan.github.io/Portafolio/"}
                    target="_blank"
                  >
                    <Image
                      className="w-full h-full object-contain"
                      src={meme}
                      alt="meme"
                      width={500}
                      height={500}
                    />
                  </Link>
                </div>
              </div>

              <div className="bg-slate-500/50 w-full rounded-xl my-2 md:p-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
                earum eligendi repellendus neque a, autem aspernatur error,
                nesciunt nihil officia corrupti rem quos consectetur sapiente,
                impedit quaerat modi rerum sunt? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Velit, assumenda voluptatum
                possimus ab praesentium veniam, quae aliquid dignissimos
                voluptas quisquam corporis dicta facere odit magni ipsum vel
                aspernatur ipsam. Vero?
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

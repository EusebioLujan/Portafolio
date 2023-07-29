"use client";
import React from "react";
interface Props{
    name:string;
    value:string|number;
    placeHolder?:string;
    error:string|undefined;
    label:string;
    onChange?:(event: React.ChangeEvent<HTMLInputElement>) => void
    type?:string
}

export default function Input({name,value,placeHolder,error,label,onChange,type}:Props) {
  return (
    <>
    <div className=" flex flex-col w-6/12 justify-center space-y-1">
              <label className=" font-semibold pb-1">{label}</label>
              <input
              type={type}
                  name={name}
                  placeholder={placeHolder}
                  className="h-8 border-2 border-slate-300 rounded-md p-1 outline-none focus:border-red-300 shadow-sm shadow-white text-black"
                  value={value}
                  onChange={onChange}
              />
              <span>{error && <span className="text-red-500">{error}</span>}</span>
          </div>
  </>
)}

"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import Input from "./input";
import ShowAlert from "../utils/sweet-alert";
import {
  YOUR_SERVICE_ID,
  YOUR_TEMPLATE_ID,
  YOUR_USER_ID,
} from "../utils/const";
import { setTimeout } from "timers";

interface FormData {
  nombre: string;
  correo: string;
  asunto: string;
  comentario: string;
}

export default function Contact(): JSX.Element {
  const initialFormData: FormData = {
    nombre: "",
    correo: "",
    asunto: "",
    comentario: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);

    try {
      await emailjs.sendForm(
        YOUR_SERVICE_ID,
        YOUR_TEMPLATE_ID,
        event.target as HTMLFormElement,
        YOUR_USER_ID
      );
      ShowAlert({
        title: "Formulario Enviado con Exito!!!",
        text: "Gracias, por contactarse conmigo!!",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        setFormData(initialFormData);
        setFormSubmitted(false);

        setTimeout(() => {
          const element = document.getElementById("contacto");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 200);
      });
    } catch (error) {
      console.error("Error al enviar el formulario:", error);
      ShowAlert({
        title: "Error",
        text: `Hubo un error al Enviar su consulta`,
        icon: "error",
        confirmButtonText: "Aceptar",
      });
      setFormSubmitted(false);
    }
  };

  return (
    <>
      <div className="items-center flex flex-col">
        <h1
          id="contacto"
          className="text-shadow-white text-4xl md:text-6xl font-bold text-center mb-10 mt-40"
        >
          Contacto
        </h1>
        <div className="flex flex-col justify-center items-center mb-20 bg-[#015560]/50 shadow-neon py-10 sm:w-10/12 md:w-8/12 rounded-md shadow-[#015560] border-[#015560] border-2 relative z-20 w-11/12">
          {!formSubmitted ? (
            <form
              className="flex flex-col justify-center items-center w-full sm:w-96 relative z-40"
              onSubmit={handleSubmit}
            >
              <Input
                name="nombre"
                value={formData.nombre}
                placeHolder="Escribe tu nombre"
                error=""
                label="Nombre"
                type="text"
                onChange={handleInputChange}
                required
              />
              <Input
                name="correo"
                value={formData.correo}
                placeHolder="Escribe tu correo"
                error=""
                label="Correo Electrónico"
                type="email"
                onChange={handleInputChange}
                required
              />
              <Input
                name="asunto"
                value={formData.asunto}
                placeHolder="Escribe el asunto"
                error=""
                label="Asunto"
                type="text"
                onChange={handleInputChange}
              />
              <div className="py-2 w-[250px] md:w-full">
                <p className=" font-semibold pb-1">Comentario</p>
                <textarea
                  name="comentario"
                  value={formData.comentario}
                  placeholder="Escribe tu comentario"
                  className="w-full pl-1 h-32 resize-none rounded-md border-2 border-slate-300 shadow-sm shadow-white text-black"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-textcolorv/80 rounded-lg p-2 w-20 my-2 hover:bg-teal-600 text-white shadow-sm shadow-textcolorv font-bold"
              >
                Enviar
              </button>
            </form>
          ) : (
            <div className="mt-4 font-bold">Enviando...</div>
          )}
        </div>
      </div>
    </>
  );
}

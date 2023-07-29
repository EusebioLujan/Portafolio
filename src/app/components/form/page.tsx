"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Input from "./input";
import ShowAlert from "../utils/sweet-alert";

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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    ShowAlert({
      title: "Formulario enviado con éxito",
      text: "Gracias por enviar el formulario",
      icon: "success",
    }).then(() => {
      setFormData(initialFormData);
      setFormSubmitted(false);
    });
  };

  return (
    <>
      <div className="min-h-screen px-10 items-center flex flex-col">
        <h1 id="contacto" className="text-6xl font-bold text-center underline mb-20 mt-40">
          Contacto
        </h1>
        <div className="flex flex-col justify-center items-center bg-bgnav/50 py-10 w-8/12 rounded-md shadow-md ">
          {!formSubmitted ? (
            <form
              className="flex flex-col justify-center items-center w-full"
              onSubmit={handleSubmit}
            >
              <Input
                name="nombre"
                value={formData.nombre}
                placeHolder="Escribe tu nombre"
                error=""
                label="Nombre"
                onChange={handleInputChange}
              />
              <Input
                name="correo"
                value={formData.correo}
                placeHolder="Escribe tu correo"
                error=""
                label="Correo Electrónico"
                onChange={handleInputChange}
              />
              <Input
                name="asunto"
                value={formData.asunto}
                placeHolder="Escribe el asunto"
                error=""
                label="Asunto"
                onChange={handleInputChange}
              />
              <div className="py-2 w-6/12">
                <p className=" font-semibold pb-1">Comentario</p>
                <textarea
                  name="comentario"
                  value={formData.comentario}
                  placeholder="Escribe tu comentario"
                  className="w-full h-32 resize-none rounded-md border-2 border-slate-300 shadow-sm shadow-white"
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-textcolorv rounded-lg p-2 w-20 my-2 hover:bg-teal-600 text-white shadow-sm shadow-textcolorv"
              >
                Enviar
              </button>
            </form>
          ) : null}
        </div>
      </div>
    </>
  );
}

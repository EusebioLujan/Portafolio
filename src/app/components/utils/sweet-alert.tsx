"use client";
import Swal, { SweetAlertIcon } from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export interface AlertOptions {
  title?: string;
  text?: string;
  icon?: SweetAlertIcon;
  confirmButtonText?: string;
  imageUrl?: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

export default function ShowAlert(options: AlertOptions) {
  const {
    title,
    text,
    icon,
    confirmButtonText,
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt = "Aceptar",
  } = options;
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
    imageUrl,
    imageWidth,
    imageHeight,
    imageAlt,
  });
}

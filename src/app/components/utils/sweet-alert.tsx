'use client'
import Swal, { SweetAlertIcon } from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

interface AlertOptions {
  title: string;
  text: string;
  icon: SweetAlertIcon;
  confirmButtonText?: string;
}

export default function ShowAlert(options: AlertOptions) {
  const { title, text, icon, confirmButtonText = 'Aceptar' } = options;
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonText,
  });
}
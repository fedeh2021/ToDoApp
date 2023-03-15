import React from "react";
import { TodoIcon } from "./";
import Swal from "sweetalert2";

function DeleteIcon({ onDelete }) {
  const handleDeleteClick = () => {
    Swal.fire({
      title: "¿Estás seguro que deseas eliminar esta tarea?",
      showCancelButton: true,
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
      icon: "warning",
      dangerMode: true,
    }).then((result) => {
      if (result.isConfirmed) {
        onDelete();
      }
    });
  };

  return <TodoIcon type="delete" onClick={handleDeleteClick} />;
}

export { DeleteIcon };

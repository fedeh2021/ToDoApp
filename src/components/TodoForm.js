import React, { useContext, useState } from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo, setOpenModal } = useContext(TodoContext);

  const handleCancelClick = (e) => {
    e.preventDefault();
    setOpenModal(false);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
    setNewTodoValue("");
  };
  const handleInputChange = (e) => {
    setNewTodoValue(e.target.value);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>Escribí la nueva tarea</label>
      <textarea
        id="newTodoValue"
        placeholder="Tarea pendiente"
        value={newTodoValue}
        onChange={handleInputChange}
      />
      <div className="TodoForm-buttonContainer">
        <button
          onClick={handleCancelClick}
          aria-label="Cancelar"
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          aria-label="Añadir"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };

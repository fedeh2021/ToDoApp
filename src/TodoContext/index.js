import React, { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = createContext();

function useSearchTodos(todos, searchValue) {
  const [searchedTodos, setSearchedTodos] = useState([]);

  useEffect(() => {
  if (!searchValue.length >= 1) {
    setSearchedTodos(todos);
  } else {
    const filteredTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
    setSearchedTodos(filteredTodos);
  }
}, [todos, searchValue])
  return searchedTodos;
}

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: setSaveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [editingTodo, setEditingTodo] = useState(null);

  const completedTodos = todos.filter((todo) => !!todo.completed).length;
  const totalTodos = todos.length;
  const searchedTodos = useSearchTodos(todos, searchValue);

  const toggleCompleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setSaveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];
    newTodos.push({
      completed: false,
      text,
    });
    setSaveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setSaveTodos(newTodos);
  };

  const startEditingTodo = (todo) => {
    setEditingTodo(todo);
    setOpenModal(true);
  };

  const stopEditingTodo = () => {
    setEditingTodo(null);
    setOpenModal(false);
  };

  const updateTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo === editingTodo);
    const newTodos = [...todos];
    newTodos[todoIndex].text = text;
    setSaveTodos(newTodos);
    setEditingTodo(null);
    setOpenModal(false);
  };

  return (
    <TodoContext.Provider
      value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        addTodo,
        searchValue,
        setSearchValue,
        searchedTodos,
        toggleCompleteTodo,
        deleteTodo,
        editingTodo,
        startEditingTodo,
        updateTodo,
        stopEditingTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };

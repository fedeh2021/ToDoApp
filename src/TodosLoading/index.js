import React from "react";
import "../styles/TodosLoading.css";
import loadingIcon from "./loading-icon.gif";

const LOADING_CONTAINER_CLASS = "LoadingTodo-container";
const LOADING_TEXT_CLASS = "LoadingTodo-text";
const DELETE_ICON_CLASS = "LoadingTodo-deleteIcon";
const LOADING_COMPLETE_ICON = "LoadingTodo-completeIcon";

function TodosLoading() {
  return (
    <div className={LOADING_CONTAINER_CLASS}>
      <img src={loadingIcon} alt="Loading icon" />
      <span className={LOADING_COMPLETE_ICON}></span>
      <p className={LOADING_TEXT_CLASS}>Estamos cargando..</p>
      <span className={DELETE_ICON_CLASS}></span>
    </div>
  );
}

export { TodosLoading };

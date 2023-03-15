import React from "react";
import "../styles/TodosLoading.css";
import loadingIcon from './icons8-reloj.gif'

const LOADING_CONTAINER_CLASS = 'LoadingTodo-container'
const LOADING_TEXT_CLASS = 'LoadingTodo-text'
const DELETE_ICON_CLASS = 'LoadingTodo-deleteIcon'

function TodosLoading() {
  return (
    <div className={LOADING_CONTAINER_CLASS}>
      <img src={loadingIcon} alt='Loading icon' />
      <span className="LoadingTodo-completeIcon"></span>
      <p className={LOADING_TEXT_CLASS}>Estamos cargando..</p>
      <span className={DELETE_ICON_CLASS}></span>
    </div>
  );
}

export { TodosLoading };

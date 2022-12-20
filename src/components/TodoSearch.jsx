import React, { useContext } from "react";
import "../styles/TodoSearch.css";
import {TodoContext} from "../TodoContext";

function TodoSearch() {
  const {searchValue, setSearchValue} = useContext(TodoContext)
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <input
      onChange={onSearchValueChange}
      value={searchValue}
      className="TodoSearch"
      placeholder=""
    />
  );
}

export  {TodoSearch};

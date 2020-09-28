import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocalStorage } from "../../hooks/useLocalStorage";

function Home() {
  const [inputValue, setInputValue] = useState("");
  const [localStorageValue, setLocalStorageValue] = useState("");
  const [getter] = useLocalStorage();

  function save() {
    localStorage.setItem("inputValue", inputValue);
  }

  function read() {
    const val = localStorage.getItem("inputValue");
    setLocalStorageValue(val);
  }

  function clean() {
    localStorage.clear();
  }

  console.log(getter);
  return (
    <>
      {/* <Link to="/agregar">Agregar startup</Link> */}
      <input type="text" onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={save}>Guardar</button>
      <button onClick={read}>Leer</button>
      <button onClick={clean}>Borrar</button>
      <p>El valor de localStorage es: {localStorageValue}</p>
    </>
  );
}

export default Home;

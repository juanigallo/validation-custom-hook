import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useNotEmpty } from "../../hooks/notEmpty";

function AddStartup() {
  const [inputs, setInputs] = useState({});
  const requiredFields = ["name", "logo", "mail"];
  const errors = useNotEmpty(inputs, requiredFields);

  function handleInputs(e) {
    const { value, name } = e.target;

    setInputs({ ...inputs, [name]: value });
  }

  function addStartup() {
    if (errors.length == 0) {
      console.log("El formulario es valido");
    } else {
      console.log(`Tenes un error en ${errors}`);
    }
  }

  return (
    <>
      <Input name="name" label="nombre" onChange={handleInputs} />
      <Input name="logo" label="logo" onChange={handleInputs} />
      <Input name="mail" label="mail" onChange={handleInputs} />
      <Input
        name="web"
        label="web"
        placeholder="Opcional"
        onChange={handleInputs}
      />
      <Input
        name="twitter"
        label="twitter"
        placeholder="Opcional"
        onChange={handleInputs}
      />
      <Input
        name="instagram"
        label="instagram"
        placeholder="Opcional"
        onChange={handleInputs}
      />
      <Button onClick={addStartup} label="Agregar startup" />
    </>
  );
}

export default AddStartup;

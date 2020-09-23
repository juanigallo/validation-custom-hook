import React from "react";

function Input(props) {
  const { label, name, onChange, type, placeholder } = props;
  return (
    <div>
      {label && <p>{label}</p>}
      <input
        name={name}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;

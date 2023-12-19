import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, onChange, errorMessage, id, ...inpurProps } = props;
  const [focused, setFocused] = useState(false);

  const handleFocus = (event) => {
    setFocused(true);
  };

  return (
    <div className="personal-info">
      <label htmlFor={inpurProps.name}>{label}</label>
      <input
        {...inpurProps}
        onChange={onChange}
        onBlur={handleFocus}
        className="personal-data"
        focused={focused.toString()}
      />
      <span className="input-errormessage">{errorMessage}</span>
    </div>
  );
};

export default FormInput;

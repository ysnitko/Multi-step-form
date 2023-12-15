import React from 'react';
import './FormInput.css';

const FormInput = (props) => {
  const { label, onChange, errorMessage, id, ...inpurProps } = props;
  return (
    <div className="personal-info">
      {/* <div className="label-error"> */}
      <label htmlFor={inpurProps.name}>{label}</label>
      {/* </div> */}
      <input {...inpurProps} onChange={onChange} className="test" />
      <span className="input-errormessage">{errorMessage}</span>
    </div>
  );
};

export default FormInput;

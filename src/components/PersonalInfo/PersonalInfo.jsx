import React from "react";
import FormInput from "../FormInput/FormInput";
import { inputs } from "../../constants";
import "./PersonalInfo.css";

const PersonalInfo = ({ values, onChange }) => {
  return (
    <div className="personal-info-form">
      <div className="personal-info-header">
        <h1 className="title-chapter">Personal info</h1>
        <p className="personal-info-requirements">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="personal-info-inputs">
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            placeholder={input.placeholder}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;

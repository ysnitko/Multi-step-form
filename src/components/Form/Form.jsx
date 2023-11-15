import React from "react";

import PersonalInfo from "../PersonalInfo/PersonalInfo";
import "./Form.css";

const Form = ({setStep}) => {
  return (
    <div className="form">
      <PersonalInfo setStep={setStep}/>
      
    </div>
  );
};

export default Form;

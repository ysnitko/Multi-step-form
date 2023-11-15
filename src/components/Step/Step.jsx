import React from "react";
import "./Step.css";

const Step = ({ stepNum, stepLabel, stepHeader, step }) => {
  return (
    <div className="step">
      <div className="step-indicator"
      style={{backgroundColor: step === 1 ? 'hsl(206, 94%, 87%)': 'none' ,
       borderColor: step === 1 ? "hsl(231, 11%, 63%)" : '' , 
       color: step === 1 ?'black': ''}}
      > {stepNum} </div>
      <div className="step-label">
        <span className="step-header">{stepHeader}</span>
        <span className="step-chapter">{stepLabel}</span>
      </div>
    </div>
  );
};

export default Step;

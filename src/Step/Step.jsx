import React from "react";
import "./Step.css";

const Step = ({ stepNum, stepLabel, stepHeader }) => {
  return (
    <div className="step">
      <div className="step-indicator"> {stepNum} </div>
      <div className="step-label">
        <span className="step-header">{stepHeader}</span>
        <span className="step-chapter">{stepLabel}</span>
      </div>
    </div>
  );
};

export default Step;

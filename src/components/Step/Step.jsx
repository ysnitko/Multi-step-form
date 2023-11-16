import React from "react";
import "./Step.css";

const Step = ({ stepNum, stepLabel, stepHeader, step }) => {
  return (
    <div className="step">
      <div
        className="step-indicator"
        style={{
          backgroundColor: stepNum === step ? "hsl(206, 94%, 87%)" : "inherit",
          borderColor: stepNum === step ? "hsl(231, 11%, 63%)" : "",
          color: stepNum === step ? "black" : "",
        }}
      >
        {stepNum}
      </div>
      <div className="step-label">
        <span className="step-header">{stepHeader}</span>
        <span className="step-chapter">{stepLabel}</span>
      </div>
    </div>
  );
};

export default Step;

import React, { useEffect } from "react";

import "./SelectPlan.css";

const SelectPlan = ({ setStep }) => {
  useEffect(() => {
    setStep(2);
  }, [setStep]);

  return (
    <form className="selected-plan-form" action="">
      <div className="selected-plan-header">
        <h1 className="title-chapter">Select your plan</h1>
        <p className="selected-plan-requirements">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="select-plan-section">
        <button type="button" className="plan arcade">
          <span className="plan-type">Arcade</span>
          <span className="plan-cost">$9/mo</span>
        </button>
        <button type="button" className="plan advanced">
          <span className="plan-type">Advanced</span>
          <span className="plan-cost">$9/mo</span>
        </button>
        <button type="button" className="plan pro">
          <span className="plan-type">Pro</span>
          <span className="plan-cost">$9/mo</span>
        </button>
      </div>
      <div className="switch-plan-period">
        <span>Monthly</span>
        <label className="switch">
          <input type="checkbox" id="checkbox" />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </form>
  );
};

export default SelectPlan;

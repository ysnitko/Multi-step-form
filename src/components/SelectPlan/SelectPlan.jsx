import React, { useEffect } from "react";

import "./SelectPlan.css";

const SelectPlan = ({ setStep, checked, setChecked, setPlan }) => {
  useEffect(() => {
    setStep(2);
  }, [setStep]);

  const handleChangePlan = () => {
    setChecked(!checked);
  };

  const handleSelectPlan = (selectPlan) => {
    setPlan((prevState) => ({
      ...prevState,
      selectPlan: selectPlan,
      period: !checked ? "Monthly" : "Yearly",
    }));
  };

  return (
    <div className="selected-plan-form">
      <div className="selected-plan-header">
        <h1 className="title-chapter">Select your plan</h1>
        <p className="selected-plan-requirements">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="select-plan-section">
        <button
          type="button"
          className="plan arcade"
          onClick={() => {
            handleSelectPlan("Arcade");
          }}
        >
          <span className="plan-type">Arcade</span>
          {!checked ? (
            <span className="plan-cost">$9/mo</span>
          ) : (
            <>
              <span className="plan-cost">90/yr</span>
              <span className="plan-discount">2 month free</span>
            </>
          )}
        </button>
        <button
          type="button"
          className="plan advanced"
          onClick={() => {
            handleSelectPlan("Advanced");
          }}
        >
          <span className="plan-type">Advanced</span>
          {!checked ? (
            <span className="plan-cost">$12/mo</span>
          ) : (
            <>
              <span className="plan-cost">120/yr</span>
              <span className="plan-discount">2 month free</span>
            </>
          )}
        </button>
        <button
          type="button"
          className="plan pro"
          onClick={() => {
            handleSelectPlan("Pro");
          }}
        >
          <span className="plan-type">Pro</span>
          {!checked ? (
            <span className="plan-cost">$15/mo</span>
          ) : (
            <>
              <span className="plan-cost">150/yr</span>
              <span className="plan-discount">2 month free</span>
            </>
          )}
        </button>
      </div>
      <div className="switch-plan-period">
        <span>Monthly</span>
        <label className="switch">
          <input
            type="checkbox"
            id="checkbox"
            onChange={handleChangePlan}
            checked={checked}
          />
          <span className="slider round"></span>
        </label>
        <span>Yearly</span>
      </div>
    </div>
  );
};

export default SelectPlan;

import React from "react";
import { steps } from "../../constants";
import Step from "../Step/Step";
import "./Sidebar.css";

const Sidebar = ({ step }) => {
  return (
    <div className="sidebar-container">
      {steps.map((item) => {
        return (
          <Step
            key={item.step}
            stepNum={item.step}
            stepLabel={item.chapter}
            stepHeader={item.stepHeader}
            step={step}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;

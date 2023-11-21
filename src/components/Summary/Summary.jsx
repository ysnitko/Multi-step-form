import React, { useState } from "react";

import "./Summary.css";

const Summary = ({}) => {
  return (
    <div className="summary-form">
      <div className="summary-header">
        <h1 className="title-chapter"> Finishing up</h1>
        <p className="summary-requirements">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="summary-info">
        <div className="choosen-plan">
          <div className="choosen-plan-info">
            <span className="plan-title">
              Arcade <span>(Monthly)</span>
            </span>
            <button type="button" className="change-plan-btn">
              Change
            </button>
          </div>
          <span className="choosen-plan-cost">$9/mo</span>
        </div>
        <div className="choosen-addons">
          <div className="added-addons">
            <span className="addon-title">Addons -title</span>
            <span className="choosen-addon-cost">+1/mo</span>
          </div>
        </div>
      </div>
      <div className="total-cost-info">
        <span className="total-info">
          Total (per <span>Month)</span>
        </span>
        <span className="total-cost">+12$/mo</span>
      </div>
    </div>
  );
};

export default Summary;

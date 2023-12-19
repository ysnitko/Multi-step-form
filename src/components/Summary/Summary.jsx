import React from "react";
import { useSelector } from "react-redux";
import { programs } from "../../constants";
import "./Summary.css";

const Summary = ({ plan, setStep }) => {
  const addon = useSelector((store) => store?.addonsReducer?.addon);

  const navigateSelectPlan = () => {
    setStep(2);
  };

  const getProgramCost = (curPlan, curPeriod) => {
    if (curPlan === "Arcade" && curPeriod === "Monthly") {
      return programs[0].cost_mo;
    } else if (curPlan === "Arcade" && curPeriod === "Yearly") {
      return programs[0].cost_yr;
    } else if (curPlan === "Advanced" && curPeriod === "Monthly") {
      return programs[1].cost_mo;
    } else if (curPlan === "Advanced" && curPeriod === "Yearly") {
      return programs[1].cost_yr;
    } else if (curPlan === "Pro" && curPeriod === "Monthly") {
      return programs[2].cost_mo;
    } else if (curPlan === "Pro" && curPeriod === "Yearly") {
      return programs[2].cost_yr;
    }
  };

  const programCost = getProgramCost(plan.selectPlan, plan.period);

  const totalAddonsCost = () => {
    let sum = 0;
    if (plan.period === "Monthly") {
      for (const item of addon) {
        sum += +item.cost_mo;
      }
    }
    if (plan.period === "Yearly") {
      for (const item of addon) {
        sum += +item.cost_yr;
      }
    }
    return sum;
  };

  const totslSum = +programCost + totalAddonsCost();

  return (
    <div className="summary-form">
      <div className="summary-header">
        <h1 className="title-chapter"> Finishing up</h1>
        <p className="summary-requirements">
          Double-check everything looks OK before confirming.
        </p>
      </div>
      <div className="summary-info-container">
        <div className="summary-info">
          <div className="choosen-plan">
            <div className="choosen-plan-info">
              <span className="plan-title">
                {plan.selectPlan} <span>({plan.period})</span>
              </span>
              <button
                type="button"
                className="change-plan-btn"
                onClick={navigateSelectPlan}
              >
                Change
              </button>
            </div>
            {plan.period === "Yearly" ? (
              <span className="choosen-plan-cost">${programCost}/yr</span>
            ) : (
              <span className="choosen-plan-cost">${programCost}/mo</span>
            )}
          </div>
          <ul className="choosen-addons">
            {addon
              .sort((a, b) => a.id - b.id)
              .map((item) => {
                return (
                  <li className="added-addons" key={item.id}>
                    <span className="addon-title">{item.title}</span>
                    {plan.period === "Yearly" ? (
                      <span className="choosen-addon-cost">
                        ${item.cost_yr}/yr
                      </span>
                    ) : (
                      <span className="choosen-addon-cost">
                        ${item.cost_mo}/mo
                      </span>
                    )}
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="total-cost-info">
          <span className="total-info">
            Total (per{" "}
            <span>{plan.period === "Yearly" ? "year" : "month"}</span>)
          </span>
          {plan.period === "Yearly" ? (
            <span className="total-cost">${totslSum}/yr</span>
          ) : (
            <span className="total-cost">${totslSum}/mo</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Summary;

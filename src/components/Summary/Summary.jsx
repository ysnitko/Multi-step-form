import React from "react";
import {useSelector} from 'react-redux';
import { programs } from "../../constants";

import "./Summary.css";

const Summary = ({plan, checked}) => {
    const addon = useSelector(
    (store) => store?.addonsReducer?.addon
  );


  const getProgramCost = (plan) => {
    if (plan.selectPlan === 'Arcade' && plan.period === 'Monthly') {
      return programs[0].cost_mo;
    } else if (plan.selectPlan === 'Arcade' && plan.period === 'Yearly') {
      return programs[0].cost_yr;
    } else if (plan.selectPlan === 'Advanced' && plan.period === 'Monthly') {
      return programs[1].cost_mo;
    } else if (plan.selectPlan === 'Advanced' &&  plan.period === 'Yearly') {
      return programs[1].cost_yr;
    } else if (plan.selectPlan === 'Pro' &&  plan.period === 'Monthly') {
      return programs[2].cost_mo;
    } else if (plan.selectPlan === 'Pro' &&  plan.period === 'Yearly') {
      return programs[2].cost_yr;
  }
}



const programCost = getProgramCost(plan.selectPlan)

console.log(plan.period);
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
              {plan.selectPlan} <span>({plan.period})</span>
            </span>
            <button type="button" className="change-plan-btn">
              Change
            </button>
          </div>
            <span className="choosen-plan-cost">
              ${programCost}/mo
            </span>
        </div>
        <ul className="choosen-addons">
          {addon.map((item) => {
            return   <li className="added-addons" key={item.id}>
            <span className="addon-title">{item.title}</span>
            <span className="choosen-addon-cost">{item.cost}</span>
          </li>
          })}
        </ul>
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

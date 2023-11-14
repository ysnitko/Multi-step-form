import React from "react";
import { steps } from "../constants";
import Step from "../Step/Step";
import "./Sidebar.css";

const Sidebar = () => {
  //   const [chapterList, setChapterList] = useState([]);

  return (
    <div className="sidebar-container">
      {steps.map((item, index) => {
        return (
          <Step
            key={item[index]}
            stepNum={item.step}
            stepLabel={item.chapter}
            stepHeader={item.stepHeader}
          />
        );
      })}
    </div>
  );
};

export default Sidebar;

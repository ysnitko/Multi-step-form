import React from "react";
import "./Footer.css";

const Footer = ({ handleBtnClick }) => {
  return (
    <div className="footer">
      <button type="button" className="back-btn">
        Go Back
      </button>
      <button type="button" className="next-btn" onClick={handleBtnClick}>
        Next Step
      </button>
    </div>
  );
};

export default Footer;

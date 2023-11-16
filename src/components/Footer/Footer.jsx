import React from "react";
import "./Footer.css";

const Footer = ({ handleBtnClick, step, setStep, isDisabled }) => {
  const handleBackBtn = () => {
    setStep((prev) => prev - 1);
  };
  return (
    <div className="footer">
      <button
        type="button"
        className="back-btn"
        style={{ visibility: step === 1 ? "hidden" : "" }}
        onClick={handleBackBtn}
      >
        Go Back
      </button>

      <button
        type="button"
        className="next-btn"
        disabled={isDisabled}
        onClick={handleBtnClick}
      >
        Next Step
      </button>
    </div>
  );
};

export default Footer;

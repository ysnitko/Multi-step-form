import React from "react";
import "./Footer.css";

const Footer = ({
  handleBtnClick,
  step,
  setStep,
  isDisabled,
  handleBackBtn,
}) => {
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
        type="submit"
        className="next-btn"
        // disabled={isDisabled}
        onClick={handleBtnClick}
      >
        Next Step
      </button>
    </div>
  );
};

export default Footer;

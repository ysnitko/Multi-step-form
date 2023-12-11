import React from "react";
import "./Footer.css";

const Footer = ({ handleBtnClick, step, handleBackBtn }) => {
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

      {step === 4 ? (
        <button
          style={{ backgroundColor: "hsl(243, 100%, 62%)" }}
          type="submit"
          className="next-btn"
          onClick={handleBtnClick}
        >
          Confirm
        </button>
      ) : (
        <button type="submit" className="next-btn" onClick={handleBtnClick}>
          Next Step
        </button>
      )}
    </div>
  );
};

export default Footer;

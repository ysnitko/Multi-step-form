import React, { useState } from "react";
import "./Footer.css";

const Footer = ({ handleBtnClick, step, handleBackBtn }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
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

      {step === 4 ? (
        <button
          style={{
            backgroundColor: isHovered
              ? "hsl(228, 100%, 84%)"
              : "hsl(243, 100%, 62%)",
          }}
          type="submit"
          className="next-btn"
          onClick={handleBtnClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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

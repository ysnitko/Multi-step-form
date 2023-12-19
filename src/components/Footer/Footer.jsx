import React, { useState } from "react";
import "./Footer.css";

const Footer = ({ step, handleBackBtn }) => {
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
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Confirm
        </button>
      ) : (
        <button className="next-btn">Next Step</button>
      )}
    </div>
  );
};

export default Footer;

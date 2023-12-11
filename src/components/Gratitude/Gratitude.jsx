import React from "react";
import "./Gratitude.css";
import thankYou from "../../assets/images/icon-thank-you.svg";

const Gratitude = () => {
  return (
    <div className="gratitude-container">
      <img src={thankYou} alt="thankU" />
      <h1>Thank you!</h1>
      <span className="gratitude-discription">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </span>
    </div>
  );
};

export default Gratitude;

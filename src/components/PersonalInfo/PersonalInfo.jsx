import React, { useEffect } from "react";

import "./PersonalInfo.css";

const PersonalInfo = ({
  setStep,
  isEmptyField,
  nameField,
  emailField,
  phoneField,
  mailRef,
  phoneRef,
  nameRef,
  handleDataInput,
}) => {
  useEffect(() => {
    setStep(1);
  }, [setStep]);

  return (
    <form className="personal-info-form" action="">
      <div className="personal-info-header">
        <h1 className="title-chapter">Personal info</h1>
        <p className="personal-info-requirements">
          Please provide your name, email addres, and phone number.
        </p>
      </div>

      <div className="personal-info-inputs">
        <label htmlFor="fname" className="personal-info">
          <div className="label-header">
            <span>Name</span>
            {nameField === "" ? (
              <span className="error-message">This field is required</span>
            ) : (
              ""
            )}
          </div>

          <input
            type="text"
            name="fnameField"
            id="fname"
            style={{
              outline:
                nameField === "" ? "1px solid hsl(354, 84%, 57%)" : "none",
            }}
            placeholder="e.g. Stephen King"
            ref={nameRef}
            // onChange={handleDataInput}
          />
        </label>

        <label htmlFor="e-mail" className="personal-info">
          <div className="label-header">
            <span>Email Address</span>
            {emailField === "" ? (
              <span className="error-message">This field is required</span>
            ) : (
              ""
            )}
          </div>
          <input
            type="email"
            name="emailField"
            style={{
              outline:
                emailField === "" ? "1px solid hsl(354, 84%, 57%)" : "none",
            }}
            id="e-mail"
            placeholder="e.g stephenking@lorem.com"
            ref={mailRef}
            // onChange={handleDataInput}
          />
        </label>
        <label htmlFor="phonenum" className="personal-info">
          <div className="label-header">
            <span>Phone Number</span>
            {phoneField === "" ? (
              <span className="error-message">This field is required</span>
            ) : (
              ""
            )}
          </div>
          <input
            type="tel"
            id="phonenum"
            style={{
              outline:
                phoneField === "" ? "1px solid hsl(354, 84%, 57%)" : "none",
            }}
            name="phoneField"
            placeholder="e.g. +1 234 567 890"
            ref={phoneRef}
            // onChange={handleDataInput}
          />
        </label>
      </div>
    </form>
  );
};

export default PersonalInfo;

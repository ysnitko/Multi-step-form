import React from "react";

import "./PersonalInfo.css";

const PersonalInfo = ({
  setStep,
  nameField,
  emailField,
  phoneField,
  mailRef,
  phoneRef,
  nameRef,
  handleDataInput,
}) => {
  return (
    // <form className="personal-info-form" action="">
    <div className="personal-info-form">
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
            {nameRef.current?.value === "" ? (
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
                nameRef.current?.value === ""
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "none",
            }}
            placeholder="e.g. Stephen King"
            ref={nameRef}
            onChange={() => handleDataInput({ target: nameRef.current })}
          />
        </label>

        <label htmlFor="e-mail" className="personal-info">
          <div className="label-header">
            <span>Email Address</span>
            {mailRef.current?.value === "" ? (
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
                mailRef.current?.value === ""
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "none",
            }}
            id="e-mail"
            placeholder="e.g stephenking@lorem.com"
            ref={mailRef}
            onChange={() => handleDataInput({ target: mailRef.current })}
          />
        </label>
        <label htmlFor="phonenum" className="personal-info">
          <div className="label-header">
            <span>Phone Number</span>
            {phoneRef.current?.value === "" ? (
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
                phoneRef.current?.value === ""
                  ? "1px solid hsl(354, 84%, 57%)"
                  : "none",
            }}
            name="phoneField"
            placeholder="e.g. +1 234 567 890"
            ref={phoneRef}
            onChange={() => handleDataInput({ target: phoneRef.current })}
          />
        </label>
      </div>
    </div>
  );
};

export default PersonalInfo;

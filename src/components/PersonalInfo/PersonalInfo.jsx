import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import "./PersonalInfo.css";

const PersonalInfo = ({setStep}) => {
  const [isEmptyField, setIsEmptyField] = useState("");
  const [nameField, setNameField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  const [phoneField, setPhoneField] = useState(null);
  const nameRef = useRef('');
  const mailRef = useRef('');
  const phoneRef = useRef('');
  setStep(1)

  const handleDataInput = (event) => {
    const targetField = event.target.name;
    if (targetField === "fnameField") {
      setNameField(nameRef.current.value);
      setIsEmptyField("");

    }

    if (targetField === "emailField") {
      setEmailField(mailRef.current.value);
      setIsEmptyField("");

    }
    if (targetField === "phoneField") {
      setPhoneField(phoneRef.current.value);
      setIsEmptyField("");

    }
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    handleDataInput({ target: nameRef.current });
    handleDataInput({ target: mailRef.current });
    handleDataInput({ target: phoneRef.current });
  };

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
            {isEmptyField === nameField
              ? (
                  <span className="error-message">This field is required</span>
                ) 
              : ""}
          </div>

          <input
            type="text"
            name="fnameField"
            id="fname"
            style={{
              outline: isEmptyField === nameField ? "1px solid hsl(354, 84%, 57%)" : "none"
            }}

            placeholder="e.g. Stephen King"
            ref={nameRef}
            onChange={handleDataInput}
          />
        </label>

        <label htmlFor="e-mail" className="personal-info">
          <div className="label-header">
            <span>Email Address</span>
            {isEmptyField === emailField ? (
              <span className="error-message">This field is required</span>
            ) : (
              ""
            )}
          </div>

          <input
            type="email"
            name="emailField"
            style={{
              outline: isEmptyField === emailField ? "1px solid hsl(354, 84%, 57%)" : "none"
            }}

            id="e-mail"
            placeholder="e.g stephenking@lorem.com"
            ref={mailRef}
            onChange={handleDataInput}
          />
        </label>

        <label htmlFor="phonenum" className="personal-info">
          <div className="label-header">
            <span>Phone Number</span>
            {isEmptyField === phoneField ? (
              <span className="error-message">This field is required</span>
            ) : (
              ""
            )}
          </div>

          <input
            type="tel"
            id="phonenum"
            style={{
              outline: isEmptyField === phoneField ? "1px solid hsl(354, 84%, 57%)" : "none"
            }}
            name="phoneField"
            placeholder="e.g. +1 234 567 890"
            ref={phoneRef}
            onChange={handleDataInput}
          />
        </label>
      </div>  

      <Footer handleBtnClick={handleBtnClick} />
    </form>
  );
};

export default PersonalInfo;

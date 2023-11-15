import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import "./PersonalInfo.css";

const PersonalInfo = () => {
  const [isEmptyField, setIsEmptyField] = useState("");
  const [nameField, setNameField] = useState(null);
  const [emailField, setEmailField] = useState(null);
  const [phoneField, setPhoneField] = useState(null);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  const outlineError = "outline:' 1px solid hsl(354, 84%, 57%)'";

  const handleDataInput = (event) => {
    const targetField = event.target.name;
    if (targetField === "fnameField") {
      setNameField(nameRef.current.value);
    }

    if (targetField === "emailField") {
      setEmailField(mailRef.current.value);
    }
    if (targetField === "phoneField") {
      setPhoneField(phoneRef.current.value);
    }
  };

  const emptyField = (field) => {
    console.log(nameField);
    console.log(emailField);
    console.log(phoneField);
    if (field === "") {
      setIsEmptyField(field);
    }
    return isEmptyField;
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    handleDataInput({ target: nameRef.current });
    handleDataInput({ target: mailRef.current });
    handleDataInput({ target: phoneRef.current });
    emptyField(nameField);
    emptyField(emailField);
    emptyField(phoneField);
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
                ) && { outlineError }
              : ""}
          </div>

          <input
            type="text"
            name="fnameField"
            style={{ outlineError } || ""}
            id="fname"
            placeholder="e.g. Stephen King"
            ref={nameRef}
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
            id="e-mail"
            placeholder="e.g stephenking@lorem.com"
            ref={mailRef}
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
            name="phoneField"
            placeholder="e.g. +1 234 567 890"
            ref={phoneRef}
          />
        </label>
      </div>

      <Footer handleBtnClick={handleBtnClick} />
    </form>
  );
};

export default PersonalInfo;

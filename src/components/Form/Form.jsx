import React, { useState, useRef } from "react";
import Footer from "../Footer/Footer";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import "./Form.css";

const Form = ({ setStep, step, isDisabled, setIsDisabled }) => {
  const [isEmptyField, setIsEmptyField] = useState("");
  // const [nameField, setNameField] = useState(null);
  // const [emailField, setEmailField] = useState(null);
  // const [phoneField, setPhoneField] = useState(null);
  const nameRef = useRef(null);
  const mailRef = useRef(null);
  const phoneRef = useRef(null);

  // const handleDataInput = (event) => {
  //   const targetField = event.target.name;
  //   if (targetField === "fnameField") {
  //     setNameField(nameRef.current.value);
  //     console.log(nameField);
  //     // setIsEmptyField("");
  //   }
  //   if (targetField === "emailField") {
  //     setEmailField(mailRef.current.value);
  //     // setIsEmptyField("");
  //   }
  //   if (targetField === "phoneField") {
  //     setPhoneField(phoneRef.current.value);
  //     // setIsEmptyField("");
  //   }
  // };

  const validateForm = () => {

    if ( nameRef.current.value === "" || mailRef.current.value === "" || phoneRef.current.value === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setStep((prev) => prev + 1);
    }
  };

  const handleBtnClick = (event) => {
    event.preventDefault()
    validateForm()
  };

  return (
    <div className="form">
      {step === 1 && (
        <PersonalInfo
          setStep={setStep}
          isEmptyField={isEmptyField}
          // nameField={nameField}
          // emailField={emailField}
          // phoneField={phoneField}
          mailRef={mailRef}
          nameRef={nameRef}
          phoneRef={phoneRef}
          // handleDataInput={handleDataInput}
        />
      )}

      {step === 2 && <SelectPlan setStep={setStep} />}
      <Footer
        handleBtnClick={handleBtnClick}
        step={step}
        setStep={setStep}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default Form;

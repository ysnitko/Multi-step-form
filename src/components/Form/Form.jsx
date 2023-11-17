import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import "./Form.css";

const Form = ({
  setStep,
  step,
  isDisabled,
  setIsDisabled,
  nameField,
  emailField,
  phoneField,
  setNameField,
  setEmailField,
  setPhoneField,
}) => {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const phoneRef = useRef("");

  const handleDataInput = (event) => {
    const targetField = event.target.name;
    if (targetField === "fnameField") {
      setNameField(nameRef.current.value);
      console.log(nameField);
    }
    if (targetField === "emailField") {
      setEmailField(mailRef.current.value);
      console.log(emailField);
    }
    if (targetField === "phoneField") {
      setPhoneField(phoneRef.current.value);
      console.log(phoneField);
    }
  };

  const validateForm = () => {
    if (
      nameRef.current.value === "" ||
      mailRef.current.value === "" ||
      phoneRef.current.value === ""
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setStep(step + 1);
    }
    console.log(isDisabled);
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    validateForm();
  };

  const handleBackBtn = () => {
    setStep(step - 1);
  };

  return (
    <form className="form-container" action="">
      {step === 1 && (
        <PersonalInfo
          setStep={setStep}
          nameField={nameField}
          emailField={emailField}
          phoneField={phoneField}
          mailRef={mailRef}
          nameRef={nameRef}
          phoneRef={phoneRef}
          handleDataInput={handleDataInput}
        />
      )}

      {step === 2 && <SelectPlan setStep={setStep} />}
      <Footer
        handleBtnClick={handleBtnClick}
        step={step}
        setStep={setStep}
        isDisabled={isDisabled}
        handleBackBtn={handleBackBtn}
      />
    </form>
  );
};

export default Form;

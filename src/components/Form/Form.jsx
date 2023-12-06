import React, { useState } from "react";
import Footer from "../Footer/Footer";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import PickAddons from "../PickAddons/PickAddons";
import Summary from "../Summary/Summary";
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
  isEmpty,
  setIsEmpty,
  // addon,
  // setAddon,
}) => {
  const [plan, setPlan] = useState({
    selectPlan: '',
  });
  const [checked, setChecked] = useState(false);

  const handleDataName = (event) => {
    setNameField(event.target.value);
  };

  const handleDataMail = (event) => {
    setEmailField(event.target.value);
  };

  const handleDataPhone = (event) => {
    setPhoneField(event.target.value);
  };

  const validateForm = () => {
    if (nameField === "" || emailField === "" || phoneField === "") {
      setIsEmpty(true);
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
      setStep(step + 1);
      setIsEmpty(false);
    }
    console.log(isDisabled);
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    validateForm();
    console.log(isEmpty);
  };

  const handleBackBtn = () => {
    setIsEmpty(false);
    setIsDisabled(true);
    setStep(step - 1);
    console.log(isEmpty);
  };

  return (
    <form className="form-container" action="" onSubmit={handleBtnClick}>
      {step === 1 && (
        <PersonalInfo
          setStep={setStep}
          nameField={nameField}
          emailField={emailField}
          phoneField={phoneField}
          handleDataName={handleDataName}
          handleDataMail={handleDataMail}
          handleDataPhone={handleDataPhone}
          isEmpty={isEmpty}
        />
      )}

      {step === 2 && (
        <SelectPlan
          setStep={setStep}
          checked={checked}
          setChecked={setChecked}
          plan={plan}
          setPlan={setPlan}
        />
      )}
      {step === 3 && (
        <PickAddons checked={checked} 
        // addon={addon} 
        // setAddon={setAddon} 
        />
      )}
      {step === 4 && <Summary 
      checked={checked}
      plan={plan}
      />}

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

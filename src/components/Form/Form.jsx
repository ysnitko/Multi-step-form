import React, { useState } from "react";
import Footer from "../Footer/Footer";
import PersonalInfo from "../PersonalInfo/PersonalInfo";
import SelectPlan from "../SelectPlan/SelectPlan";
import PickAddons from "../PickAddons/PickAddons";
import Summary from "../Summary/Summary";
import Gratitude from "../Gratitude/Gratitude";
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
}) => {
  const [plan, setPlan] = useState({
    selectPlan: "",
    period: "",
  });
  const [checked, setChecked] = useState(false);
  const [validatePhoneNum, setValidatePhoneNum] = useState(false);
  const [validateEmailAddress, setValidateEmailAddress] = useState(false);

  const handleDataName = (event) => {
    setNameField(event.target.value);
  };

  const handleDataMail = (event) => {
    setEmailField(event.target.value);
  };

  const handleDataPhone = (event) => {
    setPhoneField(event.target.value);
  };

  const validatePhone = (phone) => {
    let regex = /^(?=.*\d)(?=.*\+).+$/;
    return regex.test(phone);
  };

  const validateEmail = (email) => {
    let regex = /^(?=.*\w)(?=.*\.)(?=.*@).+$/;
    return regex.test(email);
  };
  const validatePhoneNumber = validatePhone(phoneField);
  const validateMailAdress = validateEmail(emailField);

  const validateForm = () => {
    if (nameField === "" || emailField === "" || phoneField === "") {
      setIsEmpty(true);
      setIsDisabled(true);
    } else if (!validatePhoneNumber) {
      setIsDisabled(true);
      setValidatePhoneNum(true);
    } else if (!validateMailAdress) {
      setIsDisabled(true);
      setValidateEmailAddress(true);
    } else {
      setIsEmpty(false);
      setValidatePhoneNum(false);
      setValidateEmailAddress(false);
      setIsDisabled(false);
      setStep(step + 1);
    }
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
    validateForm();
    validatePhone(phoneField);
  };

  const handleBackBtn = () => {
    setIsEmpty(false);
    setIsDisabled(true);
    setStep(step - 1);
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
          validatePhoneNum={validatePhoneNum}
          validateEmailAddress={validateEmailAddress}
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
      {step === 3 && <PickAddons checked={checked} />}
      {step === 4 && (
        <Summary checked={checked} plan={plan} setStep={setStep} />
      )}

      {step === 5 && <Gratitude />}
      {step < 5 && (
        <Footer
          handleBtnClick={handleBtnClick}
          step={step}
          setStep={setStep}
          isDisabled={isDisabled}
          handleBackBtn={handleBackBtn}
        />
      )}
    </form>
  );
};

export default Form;

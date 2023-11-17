import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  const [nameField, setNameField] = useState("");
  const [emailField, setEmailField] = useState("");
  const [phoneField, setPhoneField] = useState("");
  return (
    <div className="main-container">
      <Sidebar step={step} />
      <Form
        setStep={setStep}
        step={step}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
        nameField={nameField}
        emailField={emailField}
        phoneField={phoneField}
        setNameField={setNameField}
        setEmailField={setEmailField}
        setPhoneField={setPhoneField}
      />
    </div>
  );
};

export default App;

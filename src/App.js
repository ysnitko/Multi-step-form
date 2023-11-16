import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import "./App.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <div className="main-container">
      <Sidebar step={step} />
      <Form
        setStep={setStep}
        step={step}
        setIsDisabled={setIsDisabled}
        isDisabled={isDisabled}
      />
    </div>
  );
};

export default App;

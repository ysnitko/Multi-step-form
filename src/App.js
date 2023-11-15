import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './components/Form/Form';
import './App.css';

const App = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="main-container">
      <Sidebar step={step} />
      <Form setStep={setStep} step={step} />
    </div>
  );
};

export default App;

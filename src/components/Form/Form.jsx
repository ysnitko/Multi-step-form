import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import SelectPlan from '../SelectPlan/SelectPlan';
import PickAddons from '../PickAddons/PickAddons';
import Summary from '../Summary/Summary';
import Gratitude from '../Gratitude/Gratitude';
import './Form.css';

const Form = ({ setStep, step }) => {
  const [plan, setPlan] = useState({
    selectPlan: '',
    period: '',
  });
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    username: '',
    email: '',
    phone: '',
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStep(step + 1);
  };

  const handleBtnClick = (event) => {
    event.preventDefault();
  };

  const handleBackBtn = () => {
    setStep(step - 1);
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        {step === 1 && <PersonalInfo values={values} onChange={onChange} />}
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
            handleBackBtn={handleBackBtn}
            handleSubmit={handleSubmit}
          />
        )}
      </form>
    </>
  );
};

export default Form;

import React from 'react';
import FormInput from '../FormInput/FormInput';
import { inputs } from '../../constants';
import './PersonalInfo.css';

const PersonalInfo = ({
  nameField,
  emailField,
  phoneField,
  handleDataName,
  handleDataMail,
  handleDataPhone,
  isEmpty,
  values,
  onChange,
}) => {
  return (
    <div className="personal-info-form">
      <div className="personal-info-header">
        <h1 className="title-chapter">Personal info</h1>
        <p className="personal-info-requirements">
          Please provide your name, email address, and phone number.
        </p>
      </div>

      <div className="personal-info-inputs">
        {/* <label htmlFor="fname" className="personal-info">
          <div className="label-header">
            <span>Name</span>
            {isEmpty && nameField === '' ? (
              <span className="error-message">This field is required</span>
            ) : (
              ''
            )}
          </div>

          <input
            type="text"
            name="fnameField"
            id="fname"
            style={{
              outline:
                isEmpty && nameField === ''
                  ? '1px solid hsl(354, 84%, 57%)'
                  : 'none',
            }}
            placeholder="e.g. Stephen King"
            value={nameField}
            required
            onChange={handleDataName}
          />
        </label>

        <label htmlFor="e-mail" className="personal-info">
          <div className="label-header">
            <span>Email Address</span>
            {isEmpty && emailField === '' ? (
              <span className="error-message">This field is required</span>
            ) : (
              ''
            )}
          </div>
          <input
            type="email"
            name="emailField"
            style={{
              outline:
                isEmpty && emailField === ''
                  ? '1px solid hsl(354, 84%, 57%)'
                  : 'none',
            }}
            id="e-mail"
            placeholder="e.g stephenking@lorem.com"
            value={emailField}
            required
            onChange={handleDataMail}
          />
        </label>
        <label htmlFor="phonenum" className="personal-info">
          <div className="label-header">
            <span>Phone Number</span>
            {isEmpty && phoneField === '' ? (
              <span className="error-message">This field is required</span>
            ) : (
              ''
            )}
          </div>
          <input
            type="number"
            id="phonenum"
            style={{
              outline:
                isEmpty && phoneField === ''
                  ? '1px solid hsl(354, 84%, 57%)'
                  : 'none',
            }}
            name="phoneField"
            value={phoneField}
            required
            placeholder="e.g. +1 234 567 890"
            onChange={handleDataPhone}
          />
        </label> */}
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            placeholder={input.placeholder}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default PersonalInfo;

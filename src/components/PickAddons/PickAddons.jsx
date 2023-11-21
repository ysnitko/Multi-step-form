import React, { useState } from "react";

import "./PickAddons.css";

const PickAddons = ({ checked }) => {
  const [isSelectOnline, setIsSelectOnline] = useState(false);
  const [isSelectStorage, setIsSelectStorage] = useState(false);
  const [isSelectCustomization, setIsSelectCustomization] = useState(false);

  const handleSelectOnline = () => {
    setIsSelectOnline(!isSelectOnline);
  };

  const handleSelectStorage = () => {
    setIsSelectStorage(!isSelectStorage);
  };

  const handleSelectCustom = () => {
    setIsSelectCustomization(!isSelectCustomization);
  };

  return (
    <div className="addons-form">
      <div className="addons-header">
        <h1 className="title-chapter">Pick add-ons</h1>
        <p className="addons-requirements">
          Add-ons help enchance your gaming expirience.
        </p>
      </div>

      <div className="addons-inputs">
        <label
          htmlFor="online-service"
          className="addons-vatiant"
          style={{
            backgroundColor: isSelectOnline ? "hsl(231, 100%, 99%)" : "",
          }}
        >
          <div className="addons-info">
            <input
              className="addons-select"
              type="checkbox"
              name="online-service"
              id="online-service"
              onChange={handleSelectOnline}
            />
            <div className="addons-info-header">
              <span className="addons-title">Online service</span>
              <span className="addons-discription">
                Access to multiplayer games
              </span>
            </div>
          </div>
          {!checked ? (
            <span className="addons-cost">+1$/mo</span>
          ) : (
            <span className="addons-cost">+10$/yr</span>
          )}
        </label>
        <label
          htmlFor="large-storage"
          className="addons-vatiant"
          style={{
            backgroundColor: isSelectStorage ? "hsl(231, 100%, 99%)" : "",
          }}
        >
          <div className="addons-info">
            <input
              className="addons-select"
              type="checkbox"
              name="large-storage"
              id="large-storage"
              onChange={handleSelectStorage}
            />
            <div className="addons-info-header">
              <span className="addons-title">Larger storage</span>
              <span className="addons-discription">
                Extra 1TB of cloud save
              </span>
            </div>
          </div>
          {!checked ? (
            <span className="addons-cost">+2$/mo</span>
          ) : (
            <span className="addons-cost">+20$/yr</span>
          )}
        </label>
        <label
          htmlFor="custom-profile"
          className="addons-vatiant"
          style={{
            backgroundColor: isSelectCustomization ? "hsl(231, 100%, 99%)" : "",
          }}
        >
          <div className="addons-info">
            <input
              className="addons-select"
              type="checkbox"
              name="custom-profile"
              id="custom-profile"
              onChange={handleSelectCustom}
            />
            <div className="addons-info-header">
              <span className="addons-title">Customixable Profile</span>
              <span className="addons-discription">
                Custom theme on oyur profile
              </span>
            </div>
          </div>
          {!checked ? (
            <span className="addons-cost">+2$/mo</span>
          ) : (
            <span className="addons-cost">+20$/yr</span>
          )}
        </label>
      </div>
    </div>
  );
};

export default PickAddons;

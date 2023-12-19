import React from "react";
import { addons } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import { addAddonAC, removeAddonAC } from "../../redux/actions/addonsAC";
import {
  changeAdAC_1,
  changeAdAC_2,
  changeAdAC_3,
} from "../../redux/actions/changeAddonAC";
import "./PickAddons.css";

const PickAddons = ({ checked }) => {
  const dispatch = useDispatch();
  const addon = useSelector((store) => store?.addonsReducer?.addon);
  const isSelectOnline = useSelector(
    (store) => store?.changeAddonsReducer?.isSelectOnline
  );
  const isSelectStorage = useSelector(
    (store) => store?.changeAddonsReducer?.isSelectStorage
  );
  const isSelectCustomization = useSelector(
    (store) => store?.changeAddonsReducer?.isSelectCustomization
  );

  const handleToggleAddon = (addonItem) => {
    const isItemInAddon = addon.some((item) => item.id === addonItem.id);
    if (!isItemInAddon) {
      dispatch(addAddonAC(addonItem));
      if (addonItem === addons[0]) {
        dispatch(changeAdAC_1(true));
      }
      if (addonItem === addons[1]) {
        dispatch(changeAdAC_2(true));
      }
      if (addonItem === addons[2]) {
        dispatch(changeAdAC_3(true));
      }
    } else {
      dispatch(removeAddonAC(addonItem.id));
      if (addonItem === addons[0]) {
        dispatch(changeAdAC_1(false));
      }
      if (addonItem === addons[1]) {
        dispatch(changeAdAC_2(false));
      }
      if (addonItem === addons[2]) {
        dispatch(changeAdAC_3(false));
      }
    }
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
              checked={addon.some((item) => item.id === addons[0].id)}
              onChange={() => handleToggleAddon(addons[0])}
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
              checked={addon.some((item) => item.id === addons[1].id)}
              onChange={() => handleToggleAddon(addons[1])}
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
              checked={addon.some((item) => item.id === addons[2].id)}
              onChange={() => handleToggleAddon(addons[2])}
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

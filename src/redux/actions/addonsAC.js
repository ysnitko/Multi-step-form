import { ADD_ADDON, REMOVE_ADDON } from '../constants';

export const addAddonAC = (addon) => {
  return {
    type: ADD_ADDON,
    payload: addon,
  };
};

export const removeAddonAC = (id) => {
  return {
    type: REMOVE_ADDON,
    payload: id,
  };
};

import { CHANGE_ADDON_1, CHANGE_ADDON_2, CHANGE_ADDON_3 } from '../constants';

export const changeAdAC_1 = (payload) => {
  return { type: CHANGE_ADDON_1, payload: payload };
};

export const changeAdAC_2 = (payload) => {
  return { type: CHANGE_ADDON_2, payload: payload };
};
export const changeAdAC_3 = (payload) => {
  return { type: CHANGE_ADDON_3, payload: payload };
};

import { CHANGE_ADDON_1, CHANGE_ADDON_2, CHANGE_ADDON_3 } from '../constants';

const changeAddonsReducer = (
  state = {
    isSelectOnline: false,
    isSelectStorage: false,
    isSelectCustomization: false,
  },
  { type, payload }
) => {
  switch (type) {
    case CHANGE_ADDON_1:
      return { ...state, isSelectOnline: payload };
    case CHANGE_ADDON_2:
      return { ...state, isSelectStorage: payload };
    case CHANGE_ADDON_3:
      return { ...state, isSelectCustomization: payload };
    default:
      return state;
  }
};
export default changeAddonsReducer;

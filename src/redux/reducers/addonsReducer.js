import { ADD_ADDON, REMOVE_ADDON } from '../constants';

const addonsReducer = (state = { addon: [] }, { type, payload }) => {
  switch (type) {
    case ADD_ADDON:
      return { ...state, addon: [...state.addon, payload] };
    case REMOVE_ADDON:
      return {
        ...state,
        favoriteMoaddonvies: state.addon.filter((item) => item.id !== payload),
      };

    default:
      return state;
  }
};
export default addonsReducer;

import { combineReducers } from 'redux';
import addonsReducer from './addonsReducer';
import changeAddonsReducer from './changeAddonReducer';

const reducer = combineReducers({
  addonsReducer,
  changeAddonsReducer,
});

export default reducer;

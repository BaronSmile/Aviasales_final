import {TOGGLE_DARK_MODE} from '../actions/actionTypes';

export const initialState = false;

export const darkMode = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return !state;
    default:
      return state;
  }
}
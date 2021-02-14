import { SortTypes } from '../actions/actionTypes';

const tabs = (state = SortTypes.SHOW_CHEAPEST, { type, payload }) => {
  switch (type) {
    case 'SET_SORT_TYPE':
      return payload;
    default:
      return state;
  }
};

export default tabs;

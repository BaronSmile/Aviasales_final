import { Filters } from '../actions/actionTypes';

const initialFilterState = {
  selectedFilters: [Filters.DIRECT, Filters.ONE_STOP, Filters.TWO_STOPS, Filters.THREE_STOPS],
  isAllChecked: true,
};

const filter = (state = initialFilterState, { type, payload }) => {
  const filterIds = [Filters.DIRECT, Filters.ONE_STOP, Filters.TWO_STOPS, Filters.THREE_STOPS];
  let newFilterSelect = [];

  switch (type) {
    case 'TOGGLE_FILTER':
      if (payload === Filters.ALL) {
        return {
          ...state,
          selectedFilters: state.isAllChecked ? [] : [...filterIds],
          isAllChecked: !state.isAllChecked,
        };
      }

      newFilterSelect = state.selectedFilters.includes(payload)
        ? [...state.selectedFilters].filter((filterId) => filterId !== payload)
        : [...state.selectedFilters, payload];

      return {
        ...state,
        selectedFilters: newFilterSelect,
        isAllChecked: newFilterSelect.length === filterIds.length,
      };

    default:
      return state;
  }
};

export default filter;

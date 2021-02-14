import {SortTypes, Filters} from '../../store/actions/actionTypes';

const filters = {
  0: Filters.DIRECT,
  1: Filters.ONE_STOP,
  2: Filters.TWO_STOPS,
  3: Filters.THREE_STOPS,
};

const getSortedFiltered = (data, selectFilter, sortType) =>
  data
      .filter(({segments}) => {
        const {stops} = segments[0];
        const {length} = stops;
        return selectFilter.includes(filters[length]);
      })
      .sort((ticketA, ticketB) =>
          sortType === SortTypes.SHOW_CHEAPEST
              ? ticketA.price - ticketB.price
              : ticketA.segments[0].duration - ticketB.segments[0].duration
      );


export default getSortedFiltered;
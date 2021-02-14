import {RECEIVE_ERROR, RECEIVE_TICKETS, REQUEST_TICKETS} from '../actions/actionTypes';

const initialTicketState = {
  items: [],
  loaded: false,
  hasError: false,
};

const tickets = (state = initialTicketState, {type, payload}) => {
  switch (type) {
    case REQUEST_TICKETS:
      return {
        ...state,
        loaded: false,
        hasError: false,
      };
    case RECEIVE_TICKETS: {
      return {
        ...state,
        items: [...state.items, ...payload.tickets],
        loaded: payload.stop,
      };
    }
    case RECEIVE_ERROR:
      return {
        ...state,
        loaded: true,
        hasError: payload,
      };
    default:
      return state;
  }
};

export default tickets;

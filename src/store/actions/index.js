import apiTickets from '../../services-api/services';

export const toggleFilter = (payload) => ({
  type: 'TOGGLE_FILTER',
  payload,
});

export const setSortType = (payload) => ({
  type: 'SET_SORT_TYPE',
  payload,
});

const requestTickets = () => ({
  type: 'REQUEST_TICKETS',
});

const receiveTickets = (payload) => ({
  type: 'RECEIVE_TICKETS',
  payload,
});

export const receiveError = () => ({
  type: 'RECEIVE_ERROR',
});

const fetchTickets = (searchId, ticketCount = 5) => async (dispatch) => {
  apiTickets
      .getTickets(searchId)
      .then((result) => {
        dispatch(receiveTickets(result));
        if (!result.stop) {
          dispatch(fetchTickets(searchId));
        }
      })
      .catch(() => {
        if (ticketCount) {
          new Promise((resolve) => setTimeout(resolve, 1000)).then(() =>
              dispatch(fetchTickets(searchId, ticketCount - 1))
          );
        } else {
          dispatch(receiveError());
        }
      });
};

export const getTickets = () => async (dispatch) => {
  dispatch(requestTickets());
  apiTickets
      .getSearchId()
      .then(({searchId}) => dispatch(fetchTickets(searchId)))
      .catch(() => dispatch(receiveError()));
};


export const toggleDarkMode = () => ({
  type: 'TOGGLE_DARK_MODE',
  payload:{}
})

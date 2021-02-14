import React from 'react';
import PropTypes from 'prop-types';

import style from './tickets-list.module.scss';
import getSortedFiltered from './sort-formatting';
import TicketListItem from '../ticket-list-item';

const TicketList = ({ ticketsData, filter, activeSortType, loaded, hasError }) => {

  const errorMsg = hasError ? <span>Oops... что-то пошло не так </span> : null;

  const spinner = !loaded ? <div className={style.spinner}>Загружается билеты...</div> : null;

  const sortedAndFilteredTicketList = getSortedFiltered(ticketsData, filter, activeSortType);

  const noResultsMsg =
    !sortedAndFilteredTicketList.length && !hasError && loaded ? (
      <p className={style.notfilter}>Рейсов, подходящих под заданные фильтры, не найдено</p>
    ) : null;

  const tickets = sortedAndFilteredTicketList.slice(0, 5).map((ticket) => {
    const { ticketID } = ticket;

    return <TicketListItem key={ticketID} {...ticket} className={style['tickets-list__ticket-card']} />;
  });

  return (
    <>
      {spinner}
      {errorMsg}
      {noResultsMsg}
      <ul className={style['tickets-list']}>{tickets}</ul>
    </>
  );
};

TicketList.propTypes = {
  ticketsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeSortType: PropTypes.string.isRequired,
  loaded: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
};

export default TicketList;

/* eslint-disable no-shadow */
import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {setSortType} from '../../store/actions';

import TicketsList from '../tickets-list';
import style from './tickets-panel.module.scss';

import TabList from '../tab-list';

function TicketsPanel({ticketsData, loaded, hasError, activeSortType, onClick, filter}) {

  return (
      <section className={style['tickets-panel']}>
        <TabList onClick={onClick} activeSortType={activeSortType} className={style['tickets-panel__tabs-list']}/>
        <TicketsList
            ticketsData={ticketsData}
            loaded={loaded}
            hasError={hasError}
            filter={filter}
            activeSortType={activeSortType}
        />
      </section>
  );
}


const mapStateToProps = ({tickets, tabs, filter}) => ({
  ticketsData: tickets.items,
  loaded: tickets.loaded,
  hasError: tickets.hasError,
  activeSortType: tabs,
  filter: filter.selectedFilters,
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (sort) => dispatch(setSortType(sort)),
});

TicketsPanel.propTypes = {
  ticketsData: PropTypes.arrayOf(PropTypes.object).isRequired,
  loaded: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  filter: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsPanel);

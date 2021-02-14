import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import cn from 'classnames';

import style from './ticket-list-item.module.scss';

const TicketListItem = ({formatPrice, logo, segments, darkMode}) => {

  const formatSegment = segments.map((segment) => {
    const {deskTime, segmentID, stopsLabel, stops, formatDuration, origin, destination} = segment;
    return (
        <Fragment key={segmentID}>
          <ul>
            <li>
              <span>{origin} - {destination}</span>
              <p>{deskTime}</p>
            </li>
          </ul>
          <ul>
            <li>
              <span>В пути</span>
              <p>{formatDuration}</p>
            </li>
          </ul>
          <ul>
            <li>
              <span>{stopsLabel}</span>
              <p>{stops.join(', ')}</p>
            </li>
          </ul>
        </Fragment>
    );
  });

  const ticketClass = cn(style.ticket,{[style.dark]:darkMode})

  return (
      <div className={ticketClass}>
        <div className={style.mainTitle}>
          <h3 className={style.price}>{formatPrice}</h3>
          <img className={style.companyLogo} src={logo} alt="air company logo"/>
        </div>
        <div className={style.timetable}>{formatSegment}</div>
      </div>
  );
};

TicketListItem.propTypes = {
  formatPrice: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  segments: PropTypes.arrayOf(PropTypes.object).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = ({darkMode}) => ({
  darkMode
})

export default connect(mapStateToProps)(TicketListItem);

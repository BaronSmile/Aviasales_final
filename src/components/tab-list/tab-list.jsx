import React from 'react';
import PropTypes from 'prop-types';

import style from './tab-list.module.scss';
import {SortTypes} from '../../store/actions/actionTypes';
import TabButton from '../tab-button';

const TabList = ({activeSortType, onClick}) => (
    < ul className={style['tabs-list']}>
      <
          li
          className={style['tabs-list__item']}>
        < TabButton
            activeSortType={activeSortType}
            sort={SortTypes.SHOW_CHEAPEST}
            className={style['tabs-list__tab-btn']}
            onClick={onClick}
        >
          Самый дешевый
        < /TabButton>
      </li>
      <li className={style['tabs-list__item']}>
        <TabButton
            activeSortType={activeSortType}
            sort={SortTypes.SHOW_FASTEST}
            className={style['tabs-list__tab-btn']}
            onClick={onClick}
        >
          Самый быстрый
        </TabButton>
      </li>
    </ul>
);

TabList.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default TabList;

import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './filter-sidebar.module.scss';
import { Filters } from '../../store/actions/actionTypes';
import { toggleFilter } from '../../store/actions';
import FilterSidebarItem from '../filter-sidebar-item';

const FilterSidebar = ({ isAllChecked, selectedFilters, onChange,darkMode }) => {
  const filterLabels = {
    [Filters.ALL]: 'Все',
    [Filters.DIRECT]: 'Без пересадок',
    [Filters.ONE_STOP]: '1 пересадка',
    [Filters.TWO_STOPS]: '2 пересадки',
    [Filters.THREE_STOPS]: '3 пересадки',
  };

  const filters = Object.keys(filterLabels).map((id) => {
    const checked = id === Filters.ALL ? isAllChecked : selectedFilters.includes(id);
    return (
      <li key={id} className={style.filter__item}>
        <FilterSidebarItem filter={id} onChange={onChange} checked={checked}>
          {filterLabels[id]}
        </FilterSidebarItem>
      </li>
    );
  });

  const filterClass = cn(style.filter,{[style.dark]:darkMode})

  return (
    <div className={filterClass}>
      <h2 className={style.filter__title}>Количество пересадок</h2>
      <ul className={style.filter__list}>{filters}</ul>
    </div>
  );
};

const mapStateToProps = ({ filter,darkMode }) => ({
  isAllChecked: filter.isAllChecked,
  selectedFilters: filter.selectedFilters,
  darkMode,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (name) => dispatch(toggleFilter(name)),
});

FilterSidebar.propTypes = {
  isAllChecked: PropTypes.bool.isRequired,
  selectedFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  darkMode:PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterSidebar);

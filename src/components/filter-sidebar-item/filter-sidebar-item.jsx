import React from 'react';
import PropTypes from 'prop-types';

import style from './filter-sidebar-item.module.scss';

const FilterSidebarItem = ({filter, children, checked, onChange}) => (

    <div className={style.checkbox}>
      <input
          className={style.checkbox__input}
          type="checkbox"
          name={filter}
          id={`filter:${filter}`}
          onChange={() => onChange(filter)}
          checked={checked}
      />
      <label className={style.checkbox__label} htmlFor={`filter:${filter}`}>
        {children}
      </label>
    </div>
)

FilterSidebarItem.propTypes = {
  children: PropTypes.node.isRequired,
  filter: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FilterSidebarItem;
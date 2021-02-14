import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import cn from 'classnames';

import style from './tab-button.module.scss';

const TabButton = ({children, sort, activeSortType, onClick,darkMode }) => {
  let classNames;

  if (sort === activeSortType) {
    classNames = `${style['tab-btn']} ${style['tab-btn--active']}`;
  }

  const buttonClickedHandle = () => {
    onClick(sort);
  };

  const darkStyle = cn(classNames,{[style.dark]:darkMode})

  return (
    <button className={darkStyle} type="button" onClick={buttonClickedHandle}>
      {children}
    </button>
  );
};

TabButton.propTypes = {
  children: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  darkMode:PropTypes.bool.isRequired,
};

const mapStateToProps = ({darkMode}) => ({
  darkMode
})

export default connect(mapStateToProps)(TabButton);

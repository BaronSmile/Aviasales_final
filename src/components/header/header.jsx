import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import style from './header.module.scss';
import logo from '../../assets/logo.svg';
import {toggleDarkMode} from "../../store/actions";

// eslint-disable-next-line no-shadow
const Header = ({toggleDarkMode}) => (
    <div className={style.header}>
    <header className={style.header__main}>
      <img className={style.header__logo} src={logo} width="60" alt="Aviasales Logo"/>
      <div className={style.check}>
        <label htmlFor="check">
          <input id="check" type="checkbox" onClick={() => toggleDarkMode()}/>
        </label>
      </div>
    </header>
    </div>
);

const mapDispatchToProps = {
  toggleDarkMode
}

Header.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(Header);

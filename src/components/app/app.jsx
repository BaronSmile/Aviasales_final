import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import cn from 'classnames';

import style from './app.module.scss';
import Header from '../header';
import TicketsPanel from '../tickets-panel';
import FilterSidebar from '../filter-sidebar';

const App = ({darkMode}) => {

  const darkClass = (cn({[style.dark]: darkMode}))
  return (
      <div className={darkClass}>
        <div className={style.container}>
          <Header/>
          <main className={style.main}>
            <aside className={style.main__aside}>
              <FilterSidebar/>
            </aside>
            <TicketsPanel/>
          </main>
        </div>
      </div>
  )
};


const mapStateToProps = (state) => ({
  darkMode: state.darkMode
})

App.propTypes = {
  darkMode: PropTypes.bool.isRequired
}

export default connect(mapStateToProps)(App);

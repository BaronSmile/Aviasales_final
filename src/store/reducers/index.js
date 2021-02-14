import { combineReducers } from 'redux';

import tickets from './tickets';
import tabs from './tabs';
import filter from './filter';
import {darkMode} from './darkMode';

export default combineReducers({
  tickets,
  tabs,
  filter,
  darkMode
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './store/reducers';
import App from './components/app';
import {getTickets} from "./store/actions";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

store.dispatch(getTickets())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

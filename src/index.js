import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import "../node_modules/bootstrap/scss/bootstrap.scss";
import './styles/styles.scss';

import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root')
);
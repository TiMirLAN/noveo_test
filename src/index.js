import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/app'

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('main'),
);


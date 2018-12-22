import React from 'react';
import ReactDOM from 'react-dom';

import { configureStore } from './state/store';
import { Provider } from 'react-redux';
import App from './containers/App/App';

import registerServiceWorker from './registerServiceWorker';
const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

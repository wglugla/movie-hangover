import React from 'react';
import ReactDOM from 'react-dom';

import { store } from './store';
import { Provider } from 'react-redux';
import { AppContainer } from './containers/App/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import { all } from 'redux-saga/effects';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import * as rootReducers from './ducks/reducers';
import * as rootSagas from './ducks/sagas';

export const history = createHistory({
  // …
});

export const configureStore = initialState => {
  const middlewares = [];
  const reducers = combineReducers(rootReducers);
  const saga = createSagaMiddleware();

  middlewares.push(saga);
  middlewares.push(routerMiddleware(history));
  middlewares.push(createLogger({ level: 'info', collapsed: true }));

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  const store = createStore(
    connectRouter(history)(reducers),
    initialState,
    enhancer
  );

  saga.run(function* rootSaga() {
    yield all(Object.values(rootSagas).map(saga => saga()));
  });

  return store;
};

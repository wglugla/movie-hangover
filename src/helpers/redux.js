import { propOr, identity } from 'ramda';
import { put, call } from 'redux-saga/effects';
import { query as generateQuery } from './query';

export const createReducer = (initialState, actionHandlers) => (
  state = initialState,
  action
) => propOr(identity, action.type, actionHandlers)(state, action);

export const createSagaApiCall = receive => {
  return function*(action) {
    try {
      const { endpoint, query, ...rest } = action.payload;
      const q = generateQuery(query);
      const data = yield call(fetch, `${endpoint}${q}`, rest);
      const json = yield data.json();
      if (data.status === 200) {
        yield put(receive(json));
      } else {
        // Assuming we are using `inra-http-error`:
        yield put(receive(json, json.userMessage));
      }
    } catch (error) {
      yield put(receive({}, error));
    }
  };
};

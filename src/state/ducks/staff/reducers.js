import * as R from 'ramda';
import { createReducer } from '../../../helpers/redux';

const initialState = {
  isFetching: false,
  director: {},
  cast: [],
  error: {}
};

const actionHandlers = {
  FETCH_STAFF_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T
    });
  },

  FETCH_STAFF_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      director: R.always(action.json.crew[0]),
      cast: R.always(action.json.cast),
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
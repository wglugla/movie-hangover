import * as R from 'ramda';
import { createReducer } from '../../../helpers/redux';

const initialState = {
  isFetching: false,
  results: [],
  error: {}
};

const actionHandlers = {
  FETCH_SUGGESTED_MOVIES_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T
    });
  },

  FETCH_SUGGESTED_MOVIES_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      results: R.always(action.json),
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);
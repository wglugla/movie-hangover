import * as R from 'ramda';
import { createReducer } from '../../../helpers/redux';

const initialState = {
  isFetching: false,
  results: [],
  error: {},
  totalResults: 0,
  totalPages: 0
};

const actionHandlers = {
  FETCH_MOVIES_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T
    });
  },

  FETCH_MOVIES_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      results: R.always(action.json.results),
      error: R.always(action.error),
      totalResults: R.always(action.json.total_results),
      totalPages: R.always(action.json.total_pages)
    });
  }
};

export default createReducer(initialState, actionHandlers);

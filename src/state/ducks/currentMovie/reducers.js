import * as R from 'ramda';
import { createReducer } from '../../../helpers/redux';

const initialState = {
  isFetching: false,
  result: {},
  error: {}
};

const actionHandlers = {
  FETCH_MOVIE_INFO_REQUEST: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.T
    });
  },

  FETCH_MOVIE_INFO_RECEIVE: (state, action) => {
    return R.evolve(R.__, state)({
      isFetching: R.F,
      result: R.always(action.json),
      error: R.always(action.error)
    });
  }
};

export default createReducer(initialState, actionHandlers);

import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/redux';
import {
  FETCH_SUGGESTED_MOVIES_REQUEST,
  fetchSuggestedMoviesReceive
} from './actions';

export default function* suggestedMoviesSaga() {
  yield takeLatest(
    FETCH_SUGGESTED_MOVIES_REQUEST,
    createSagaApiCall(fetchSuggestedMoviesReceive)
  );
}

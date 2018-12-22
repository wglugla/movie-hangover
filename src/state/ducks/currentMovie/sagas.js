import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/redux';
import { FETCH_MOVIE_INFO_REQUEST, fetchMovieInfoReceive } from './actions';

export default function* currentMovieSaga() {
  yield takeLatest(
    FETCH_MOVIE_INFO_REQUEST,
    createSagaApiCall(fetchMovieInfoReceive)
  );
}

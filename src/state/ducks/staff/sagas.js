import { takeLatest } from 'redux-saga/effects';
import { createSagaApiCall } from '../../../helpers/redux';
import { FETCH_STAFF_REQUEST, fetchStaffReceive } from './actions';

export default function* moviesSaga() {
  yield takeLatest(FETCH_STAFF_REQUEST, createSagaApiCall(fetchStaffReceive));
}
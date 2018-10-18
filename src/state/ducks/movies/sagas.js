import { takeLatest } from "redux-saga/effects";
import { createSagaApiCall } from "../../../helpers/redux";
import { FETCH_MOVIES_REQUEST, fetchMoviesReceive } from "./actions";

export default function* moviesSaga() {
  yield takeLatest(FETCH_MOVIES_REQUEST, createSagaApiCall(fetchMoviesReceive));
}

import { moviesListDomain } from '../domains';

export const FETCH_MOVIES_REQUEST = 'FETCH_MOVIES_REQUEST';
export const FETCH_MOVIES_RECEIVE = 'FETCH_MOVIES_RECEIVE';

export const fetchMoviesRequest = phrase => ({
  type: FETCH_MOVIES_REQUEST,
  payload: {
    endpoint: `${moviesListDomain}&query=${encodeURIComponent(phrase)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
});

export const fetchMoviesReceive = (json, error = null) => ({
  type: FETCH_MOVIES_RECEIVE,
  json,
  error
});

export default {
  fetchMoviesRequest,
  fetchMoviesReceive
};

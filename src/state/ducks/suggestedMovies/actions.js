import { suggestedMoviesDomain } from '../domains';

export const FETCH_SUGGESTED_MOVIES_REQUEST = 'FETCH_SUGGESTED_MOVIES_REQUEST';
export const FETCH_SUGGESTED_MOVIES_RECEIVE = 'FETCH_SUGGESTED_MOVIES_RECEIVE';

export const fetchSuggestedMoviesRequest = movieId => ({
  type: FETCH_SUGGESTED_MOVIES_REQUEST,
  payload: {
    endpoint: `${suggestedMoviesDomain(movieId)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
});

export const fetchSuggestedMoviesReceive = (json, error = null) => ({
  type: FETCH_SUGGESTED_MOVIES_RECEIVE,
  json,
  error
});

export default {
  fetchSuggestedMoviesRequest,
  fetchSuggestedMoviesReceive
};

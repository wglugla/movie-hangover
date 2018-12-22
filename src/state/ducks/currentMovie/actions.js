import { movieInfoDomain } from '../domains';

export const FETCH_MOVIE_INFO_REQUEST = 'FETCH_MOVIE_INFO_REQUEST';
export const FETCH_MOVIE_INFO_RECEIVE = 'FETCH_MOVIE_INFO_RECEIVE';

export const fetchMovieInfoRequest = paramsId => ({
  type: FETCH_MOVIE_INFO_REQUEST,
  payload: {
    endpoint: `${movieInfoDomain(paramsId)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
});

export const fetchMovieInfoReceive = (json, error = null) => ({
  type: FETCH_MOVIE_INFO_RECEIVE,
  json,
  error
});

export default {
  fetchMovieInfoRequest,
  fetchMovieInfoReceive
};

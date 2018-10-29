import { staffDomain } from '../domains';

export const FETCH_STAFF_REQUEST = 'FETCH_STAFF_REQUEST';
export const FETCH_STAFF_RECEIVE = 'FETCH_STAFF_RECEIVE';

export const fetchStaffRequest = paramsId => ({
  type: FETCH_STAFF_REQUEST,
  payload: {
    endpoint: `${staffDomain(paramsId)}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }
});

export const fetchStaffReceive = (json, error = null) => ({
  type: FETCH_STAFF_RECEIVE,
  json,
  error
});

export default {
  fetchStaffRequest,
  fetchStaffReceive
};
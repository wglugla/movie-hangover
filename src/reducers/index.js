import { combineReducers } from "redux";
import { moviesList } from "./moviesList";
import { searchedPhrase } from './searchedPhrase';

export default combineReducers({
  moviesList,
  searchedPhrase
});

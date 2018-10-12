import { combineReducers } from "redux";
import { moviesList } from "./moviesList";
import { searchedPhrase } from './searchedPhrase';
import { currentMovie } from './currentMovie';

export default combineReducers({
  moviesList,
  searchedPhrase,
  currentMovie
});

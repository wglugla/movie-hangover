import { combineReducers } from "redux";
import { moviesList } from "./moviesList";
import { searchedPhrase } from './searchedPhrase';
import { currentMovie } from './currentMovie';
import { cast } from './cast';
import { director } from './director';

export default combineReducers({
  moviesList,
  searchedPhrase,
  currentMovie,
  cast,
  director
});

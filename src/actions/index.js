export const changePhrase= (phrase) => ({
  type: 'CHANGE_WORD',
  phrase
});

export const changePhraseAndFetch = word => dispatch => {
  dispatch(changePhrase(word));
  dispatch(fetchMovies());
};

export const moviesFetched = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
});

export const fetchMovies = () => (dispatch, getState) => {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-EN&query=${encodeURIComponent(getState().searchedPhrase)}`)
  .then(res => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then(json => {
    if (json.total_results === 0) throw Error ('not found');
    dispatch(moviesFetched(json.results))
  })
  .catch((error) => {
    console.error(error);
  })
};

export const currentMovieFetched = (movie) => ({
  type: 'FETCH_CURRENT_MOVIE_SUCCESS',
  movie
});

export const findCurrentMovie = (paramsId) => (dispatch) => {
  fetch(`https://api.themoviedb.org/3/movie/${paramsId}?api_key=${process.env.REACT_APP_API_KEY}&language=en-EN`)
  .then(res => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then(json => {
    if (json.total_results === 0) throw Error ('not found');
    dispatch(currentMovieFetched(json))
  })
  .catch((error) => {
    console.error(error);
  })
};


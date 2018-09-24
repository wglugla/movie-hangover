export const changePhrase= (phrase) => ({
  type: 'CHANGE_WORD',
  phrase
});

export const changePhraseAndFetch = word => dispatch => {
  dispatch(changePhrase(word));
  dispatch(fetchMovies());
}

export const moviesFetched = (movies) => ({
  type: 'FETCH_MOVIES_SUCCESS',
  movies
});

export const fetchMovies = () => (dispatch, getState) => {
  console.log(getState().searchedPhrase);
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-EN&query=${encodeURIComponent(getState().searchedPhrase)}`)
  .then(res => {
    if (!res.ok) throw Error(res.statusText);
    return res.json();
  })
  .then(json => {
    if (json.total_results === 0) throw Error ('not found');
    dispatch(moviesFetched(json.results))
    console.log(json.results);
  })
  .catch((error) => {
    console.error(error);
  })
}
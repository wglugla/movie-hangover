export const currentMovie = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_CURRENT_MOVIE_SUCCESS':
      return action.movie
    default:
      return state
  }
}
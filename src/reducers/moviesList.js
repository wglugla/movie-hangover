export const moviesList = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_SUCCESS':
      return [
        ...action.movies
      ]
    default:
      return state
  }
}
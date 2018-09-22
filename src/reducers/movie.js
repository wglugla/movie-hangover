export const movie = (state='No title :<', action) => {
  switch(action.type) {
    case 'CHANGE_MOVIE_NAME':
      return action.movieName;
    default:
      return state;
  }
}
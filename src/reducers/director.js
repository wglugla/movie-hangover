export const director = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DIRECTOR_SUCCESS':
      return action.director
    default:
      return state
  }
}
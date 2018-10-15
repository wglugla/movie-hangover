export const cast = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_CAST_SUCCESS':
      return action.cast
    default:
      return state
  }
}
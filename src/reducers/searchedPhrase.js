export const searchedPhrase = (state= '', action) => {
  switch (action.type) {
    case 'CHANGE_WORD':
      return action.phrase;
    default:
      return state
  }
}
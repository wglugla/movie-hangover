export const moviesListDomain = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`;

export const movieInfoDomain = paramsId => `https://api.themoviedb.org/3/movie/${paramsId}?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`;

export const staffDomain = paramsId => `https://api.themoviedb.org/3/movie/${paramsId}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`;

export const suggestedMoviesDomain = paramsId => `https://api.themoviedb.org/3/movie/${paramsId}/similar?api_key=${process.env.REACT_APP_API_KEY}&language=pl-PL`;
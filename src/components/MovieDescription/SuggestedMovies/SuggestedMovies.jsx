import React from 'react';

import SuggestedMovie from './SuggestedMovie/SuggestedMovie';

export const SuggestedMovies = props => {
  const movies = props.suggestedMovies.results || [];
  console.log(movies)
  return (
    <div>
      <h2> Suggested movies: </h2>
      <ul>
        {movies.map(movie => (
          <SuggestedMovie title={movie.title} id={movie.id} key={movie.id} />
        ))}
      </ul>
    </div>
  );
};

export default SuggestedMovies;

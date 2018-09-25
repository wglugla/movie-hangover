import React from 'react'

import Movie from './Movie/Movie';

export const MoviesList = (props) => {
  const { movies } = props;
  return (
    <ul className="moviesList__list">
      {movies.map((movie) => (
        <Movie title={movie.title} key={movie.id} />
      ))}
    </ul>
  )
};



export default MoviesList

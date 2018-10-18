import React from "react";

import Movie from "./Movie/Movie";

export const MoviesList = ({ movies }) => {
  return (
    <ul className="moviesList__list">
      {movies.map(movie => (
        <Movie title={movie.title} id={movie.id} key={movie.id} />
      ))}
    </ul>
  );
};

export default MoviesList;

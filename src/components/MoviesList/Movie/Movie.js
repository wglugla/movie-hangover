import React from 'react'

export const Movie = (movieInfo) => {
  const { title } = movieInfo;
  return (
    <li className="moviesList__element">
      <h2 className="moviesList__title"> {title} </h2>
    </li>
  ); 
};

export default Movie;
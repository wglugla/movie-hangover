import React from 'react';
import {Link} from 'react-router-dom';

export const Movie = (movieInfo) => {
  const { id, title } = movieInfo;
  return (
    <Link to={`/movie/${id}`} >
      <li className="moviesList__element">
        <h2 className="moviesList__title"> {title} </h2>
      </li>
    </Link>
  ); 
};

export default Movie;
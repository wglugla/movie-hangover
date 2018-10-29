import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = props => {
  const { id, title } = props;
  return (
    <Link to={`/movie/${id}`}>
      <li className="moviesList__element">
        <h2 className="moviesList__title"> {title} </h2>
      </li>
    </Link>
  );
};

export default Movie;

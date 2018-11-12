import React from 'react';
import { Link, BrowserRouter as router } from 'react-router-dom';

export const SuggestedMovie = props => {
  const { id, title } = props;
  return (
    <Link onClick={reloadRoute} to={`/movie/${id}`}>
      <li className="moviesList__element">
        <h2 className="moviesList__title"> {title} </h2>
      </li>
    </Link>
  );
};

let reloadRoute = id => {
  router.push({ pathname: '/e' });
  router.replace({ pathname: `/movie/${id}` });
};

export default SuggestedMovie;

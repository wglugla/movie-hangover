import React from 'react';
import { Link, BrowserRouter as router } from 'react-router-dom';

export const SuggestedMovie = ({ id, title }) => {
  return (
    <Link onClick={reloadRoute} to={`/movie/${id}`}>
      <li>
        <h2> {title} </h2>
      </li>
    </Link>
  );
};

let reloadRoute = id => {
  router.push({ pathname: '/' });
  router.replace({ pathname: `/movie/${id}` });
};

export default SuggestedMovie;

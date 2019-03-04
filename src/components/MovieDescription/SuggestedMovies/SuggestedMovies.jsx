import React from 'react';

import SuggestedMovie from './SuggestedMovie/SuggestedMovie';
import Loader from '../../../styled/StyledLoader';

export const SuggestedMovies = ({ movies, isFetching }) => {
  if (isFetching === false)
    return (
      <section>
        <h2> Sugerowane do obejrzenia: </h2>
        <ul>
          {movies.map(movie => (
            <SuggestedMovie title={movie.title} id={movie.id} key={movie.id} />
          ))}
        </ul>
      </section>
    );
  else return <Loader />;
};

export default SuggestedMovies;

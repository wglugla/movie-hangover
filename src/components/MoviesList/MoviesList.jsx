import React from 'react';

import Movie from './Movie/Movie';

export const MoviesList = props => {
  const { movies } = props;
  if (props.isFetching === false)
    return (
      <ul className="moviesList__list">
        {movies.map(movie => (
          <Movie title={movie.title} id={movie.id} key={movie.id} />
        ))}
      </ul>
    );
  else return <div> Loading ... </div>;
};

export default MoviesList;

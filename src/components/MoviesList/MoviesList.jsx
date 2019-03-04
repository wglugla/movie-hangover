import React from 'react';

import Movie from './Movie/Movie';
import Loader from '../../styled/StyledLoader';

export const MoviesList = ({
  movies,
  totalResults,
  totalPages,
  isFetching
}) => {
  if (totalResults !== 0 || isFetching === true) {
    if (isFetching === false)
      return (
        <section>
          <h3 className='title is-4'> Znaleziono {totalResults} filmów: </h3>
          <p className='subtitle is-size-5'> Strona 1 z {totalPages} </p>
          <ul className='movieList'>
            {movies.map(movie => (
              <Movie
                title={movie.title}
                poster={movie.poster_path}
                date={movie.release_date}
                vote={movie.vote_average}
                id={movie.id}
                key={movie.id}
              />
            ))}
          </ul>
        </section>
      );
    else return <Loader />;
  } else {
    return (
      <div></div>
    );
  }
};

export default MoviesList;

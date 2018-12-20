import React from 'react';

import Movie from './Movie/Movie';

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1.5rem;
`;

export const MoviesList = props => {
  const { movies } = props;
  console.log(movies[1]);
  if (props.isFetching === false)
    return (
      <StyledSection>
        <h3 className='title is-5'> Znaleziono 100 filmów: </h3>
        <ul>
          {movies.map(movie => (
            <Movie title={movie.title} poster={movie.poster_path} date={movie.release_date} vote={movie.vote_average} id={movie.id} key={movie.id} />
          ))}
        </ul>
      </StyledSection>
    );
  else return <div> Loading ... </div>;
};

export default MoviesList;

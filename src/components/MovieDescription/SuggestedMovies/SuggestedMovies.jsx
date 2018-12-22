import React from 'react';

import SuggestedMovie from './SuggestedMovie/SuggestedMovie';
import Loader from '../../../styled/StyledLoader';

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1rem;
`;

export const SuggestedMovies = props => {
  const { movies } = props;
  if (props.isFetching === false)
    return (
      <StyledSection>
        <h2 className='title is-4'> Suggested movies: </h2>
        <ul>
          {movies.map(movie => (
            <SuggestedMovie title={movie.title} id={movie.id} key={movie.id} />
          ))}
        </ul>
      </StyledSection>
    );
  else return <Loader />;
};

export default SuggestedMovies;

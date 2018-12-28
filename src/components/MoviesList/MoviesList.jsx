import React from 'react';

import Movie from './Movie/Movie';
import Loader from '../../styled/StyledLoader';

import styled from 'styled-components';

const StyledSection = styled.section`
  padding: 1.5rem;
`;

export const MoviesList = ({
  movies,
  totalResults,
  totalPages,
  isFetching
}) => {
  if (totalResults !== 0 || isFetching === true) {
    if (isFetching === false)
      return (
        <StyledSection>
          <h3 className='title is-5'> Znaleziono {totalResults} filmów: </h3>
          <p className='subtitle is-6'> Strona 1 z {totalPages} </p>
          <ul>
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
        </StyledSection>
      );
    else return <Loader />;
  } else {
    return (
      <StyledSection>
        <h3 className='title is-5'>
          Użyj wyszukiwarki powyżej aby rozpocząć wyszukiwanie.
        </h3>
        <h4 className='title is-5'>Zadanie aplikacji:</h4>
        <p>
          Wpisz tytuł filmu, który ostatnio obejrzałeś (lub jego część). Wybierz
          z listy i poznaj nowe filmy, podobne do tego, który ostatnio Ci się
          spodobał.
        </p>
      </StyledSection>
    );
  }
};

export default MoviesList;

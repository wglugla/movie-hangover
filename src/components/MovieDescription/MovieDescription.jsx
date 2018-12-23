import React from 'react';

import Loader from '../../styled/StyledLoader';
import styled from 'styled-components';

const StyledPoster = styled.figure`
  width: 50%;
  margin: 0 1.5rem;
`;

export const MovieDescription = props => {
  const { title, overview, vote_average, poster_path } = props.currentMovie;
  const { name } = props.director;
  const cast = props.cast;
  const imagePath = `http://image.tmdb.org/t/p/w185/${poster_path}`;
  const imageAlt = `${title} poster`;
  if (props.isFetching === false)
    return (
      <div className='card'>
        <div className='card-image'>
          <StyledPoster className='image'>
            <img src={imagePath} alt={imageAlt} />
          </StyledPoster>
        </div>
        <div className='card-content'>
          <div className='content'>
            <h1 className='title is-4'> {title} </h1>
            <h2 className='subtitle is-5'> Vote: {vote_average}</h2>
            <p> {overview} </p>
            <h3 className='title is-5'> Director: {name} </h3>
            <h3 className='title is-5'> Actors: </h3>
          </div>
          <ul>
            {cast.map(el => (
              <li key={el.id}> {el.name} </li>
            ))}
          </ul>
        </div>
      </div>
    );
  else return <Loader />;
};

export default MovieDescription;

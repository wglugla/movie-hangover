import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledContent = styled.div`
  padding: 0.5rem 0;
`;

const StyledDate = styled.p`
  color: #868686;
`;

export const Movie = props => {
  const { id, title, poster, date, vote } = props;
  const imagePath = `http://image.tmdb.org/t/p/w185/${poster}`;
  return (
    <div>
      <Link to={`/movie/${id}`} className='card-content'>
        <li className='media'>
          <div className='media-left'>
            <figure className='image is-64x64'>
              <img src={imagePath} alt='Placeholder' />
            </figure>
          </div>
          <StyledContent className='media-content'>
            <h4 className='title is-6'>{title}</h4>
            <StyledDate className='subtitle is-7'> {date} </StyledDate>
            <p className='subtitle is-7'> Ocena: {vote} </p>
          </StyledContent>
        </li>
      </Link>
    </div>
  );
};

export default Movie;

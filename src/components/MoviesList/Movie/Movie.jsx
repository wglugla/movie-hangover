import React from 'react';
import { Link } from 'react-router-dom';

export const Movie = ({ id, title, poster, date, vote }) => {
  const imagePath = `http://image.tmdb.org/t/p/w185/${poster}`;
  return (
    <li className='movie'>
      <Link className='movieLink' to={`/movie/${id}`}>
          <div className='posterCase'>
            <figure className='image'>
              <img src={imagePath} alt='Placeholder' />
            </figure>
          </div>
          <div className='description'>
            <h4 className='movieTitle'>{title}</h4>
            <div className="movieInfo">
              <p className='movieVote'> {vote} </p>
              <p className='movieDate'> {date} </p>
            </div>
          </div>
      </Link>
    </li>
  );
};

export default Movie;

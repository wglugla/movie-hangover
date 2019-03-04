import React from 'react';

import Loader from '../../styled/StyledLoader';

export const MovieDescription = props => {
  const { title, overview, vote_average, poster_path } = props.currentMovie;
  const { name } = props.director;
  const cast = props.cast;
  let imagePath = poster_path
    ? `http://image.tmdb.org/t/p/w185/${poster_path}`
    : '';
  let imageAlt = title ? `${title} poster` : '';
  if (props.isFetching === false)
    return (
      <div className='movieDescription'>
          <figure className='movieDescription__poster'>
            <img src={imagePath} alt={imageAlt} />
          </figure>
          <h1 className='movieDescription__title'> {title} </h1>
          <h2 className='movieDescription__vote'> Ocena: {vote_average}</h2>
          <p className='movieDescription__desc'> {overview} </p>
          <h3 className='movieDescription__subtitle'> Reżyser: {name} </h3>
          <h3 className='movieDescription__subtitle'> Aktorzy: </h3>
          <ul>
            {cast.map(el => (
              <li key={el.id}> {el.name} </li>
            ))}
          </ul>
      </div>
    );
  else return <Loader />;
};

export default MovieDescription;

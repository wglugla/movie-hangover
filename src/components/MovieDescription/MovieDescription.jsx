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
      <div>
        <div>
          <figure>
            <img src={imagePath} alt={imageAlt} />
          </figure>
        </div>
        <h3>
          <h3>
            <h1> {title} </h1>
            <h2> Ocena: {vote_average}</h2>
            <p> {overview} </p>
            <h3> Reżyser: {name} </h3>
            <h3> Aktorzy: </h3>
          </h3>
          <ul>
            {cast.map(el => (
              <li key={el.id}> {el.name} </li>
            ))}
          </ul>
        </h3>
      </div>
    );
  else return <Loader />;
};

export default MovieDescription;

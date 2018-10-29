import React from 'react';

export const MovieDescription = props => {
  const { title, overview, vote_average } = props.currentMovie;
  const { name } = props.director;
  const cast = props.cast;
  return (
    <div>
      <h1> {title} </h1>
      <h2> Vote: {vote_average}</h2>
      <p> {overview} </p>
      <h3> Director: {name} </h3>
      <h3> Actors: </h3>
      <ul>
        {cast.map(el => (
          <li key={el.id}> {el.name} </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDescription;

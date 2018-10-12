import React from 'react'

export const MovieDescription = (movie) => {
  console.log(movie.props);
  const { title, overview, popularity, vote_average } = movie.props;
  return (
    <div>
      <h1> {title} </h1>
      <h2> Vote: {vote_average}</h2>
      <h3> Popularity: {popularity}</h3>
      <p> {overview} </p>
    </div>
  );
};

export default MovieDescription;
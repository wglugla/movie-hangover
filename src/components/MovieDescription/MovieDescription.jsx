import React from 'react';

export const MovieDescription = props => {
  console.log(props.currentMovie);
  const { title, overview, vote_average} = props.currentMovie;
  const { name } = props.director;
  const cast = props.cast;
  if (props.isFetching === false)
    return (
      <div className='card'>
        <div className='card-content'>
          <div className="content">
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
  else return <div> Loading ... </div>;
};

export default MovieDescription;

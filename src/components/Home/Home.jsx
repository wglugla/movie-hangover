import React from 'react';
import SearchForm from '../../containers/SearchForm/SearchForm';
import MoviesList from '../../containers/MoviesList/MoviesList';

export default () => {
  return (
    <main>
      <SearchForm />
      <MoviesList />
    </main>
  );
};

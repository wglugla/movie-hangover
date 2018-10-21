import React from "react";
import SearchForm from "../../containers/SearchForm/SearchForm";
import MoviesList from '../../containers/MoviesList/MoviesList';
 export default props => {
  return (
    <main>
      <SearchForm />
      <MoviesList />
    </main>
  );
};
import React, { Component } from "react";
import SearchForm from "../../containers/SearchForm";
import MoviesList from "../../containers/MoviesList";

export default props => {
  return (
    <main>
      <SearchForm />
      <MoviesList />
    </main>
  );
};

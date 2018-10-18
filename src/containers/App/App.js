import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import AsyncComponent from "../../components/shared/AsyncComponent";

import SearchForm from "../../components/AppHeader/SearchForm/SearchForm";
import MovieDetails from "../../components/MovieDetails/MovieDetails";
import Home from "../Home";
import Routes from "../../routes";

export class App extends Component {
  componentDidMount() {}
  render() {
    return <Routes />;
  }
  maybeRenderMoviesList = () => {
    if (this.props.movies.length < 1) {
      return null;
    }
    return (
      <AsyncComponent
        componentProps={{ movies: this.props.movies }}
        componentProvider={() =>
          import("../../components/MoviesList/MoviesList").then(
            module => module.MoviesList
          )
        }
      />
    );
  };
}

const mapStateToProps = state => {
  return {
    movies: state.moviesList
  };
};

export default connect(mapStateToProps)(App);

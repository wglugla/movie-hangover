import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AsyncComponent from '../../components/shared/AsyncComponent';

import SearchForm from '../../components/AppHeader/SearchForm/SearchForm';
import MovieDetails from '../../components/MovieDetails/MovieDetails';

export class App extends Component {
  componentDidMount(){};
  render() {
    return (
      <Router basename={`/movie-hangover`}>
        <div>
          <Link to={`/`}> Home </Link>
          {/* <AppHeader /> */}
          <Route exact component={SearchForm} />
          <Route exact path={`/moviesList`} component={this.maybeRenderMoviesList} />
          <Route path={`/movie/:id`} component={MovieDetails} />
        </div>
      </Router>
    );
  }
  maybeRenderMoviesList = () => {
    if (this.props.movies.length < 1) {
      return null;
    }
    return (
      <AsyncComponent
        componentProps={{ movies: this.props.movies }}
        componentProvider={() => 
          import('../../components/MoviesList/MoviesList')
          .then(module => module.MoviesList)
        }
      />
    );
  };
}

const mapStateToProps = (state) => {
  return {
    movies: state.moviesList
  }
};


export default connect(mapStateToProps)(App);


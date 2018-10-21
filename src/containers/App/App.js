import React, { Component } from 'react';
import { connect } from 'react-redux';

import AsyncComponent from '../../components/shared/AsyncComponent';
import Routes from '../../routes';

export class App extends Component {
  componentDidMount() {};
  render() {
    return <Routes />
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


import React, { Component }from 'react';
import { connect } from 'react-redux';

import MovieDescription from './MovieDescription/MovieDescription';

export class MovieDetails extends Component {
  state = {
    currentMovie: {}
  }
  componentDidMount() {
    this.filterMovies();
  }
  render() {
    return (
      this.state.currentMovie ? <MovieDescription props={this.state.currentMovie} /> : <p> Error </p>
    );
  }
  filterMovies = () => {
    const { moviesList, match } = this.props;
    this.setState({
      currentMovie: moviesList.find((movie) => Number(movie.id) === Number(match.params.id))
    })
  }
};


const mapStateToProps = (state) => {
  return {
    moviesList: state.moviesList
  }
};

export default connect(
  mapStateToProps
)(MovieDetails);
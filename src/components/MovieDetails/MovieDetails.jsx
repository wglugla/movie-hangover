import React, { Component }from 'react';
import { connect } from 'react-redux';
import { findCurrentMovie, getStaff } from '../../actions/index';

import MovieDescription from './MovieDescription/MovieDescription';

export class MovieDetails extends Component {
  componentDidMount() {
    this.props.findCurrentMovie(this.props.match.params.id);
    this.props.getStaff(this.props.match.params.id);
  }
  render() {
    return (
      (this.props.currentMovie && this.props.crew !== {}) ? 
      <MovieDescription 
        currentMovie={this.props.currentMovie} 
        director={this.props.director}
        cast={this.props.cast}
      /> : 
      <p> Error </p>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie,
    director: state.director,
    cast: state.cast
  }
};

const mapDispatchToProps = { findCurrentMovie, getStaff };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
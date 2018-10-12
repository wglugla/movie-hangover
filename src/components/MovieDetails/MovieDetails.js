import React, { Component }from 'react';
import { connect } from 'react-redux';
import { findCurrentMovie } from '../../actions/index';

import MovieDescription from './MovieDescription/MovieDescription';

export class MovieDetails extends Component {
  componentDidMount() {
    this.props.findCurrentMovie(this.props.match.params.id);
  }
  render() {
    return (
      this.props.currentMovie ? <MovieDescription props={this.props.currentMovie} /> : <p> Error </p>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    currentMovie: state.currentMovie
  }
};

const mapDispatchToProps = { findCurrentMovie };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
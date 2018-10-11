import React, { Component }from 'react';
import { connect } from 'react-redux';

export class MovieDetails extends Component {
  state = {
    currentMovie: {}
  }
  componentDidMount() {
    this.filterMovies();
  }
  render() {
    return (
      this.state.currentMovie ? <h1> {this.state.currentMovie.title} </h1> : <p> Error </p>
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
import * as React from "react";
import { connect } from "react-redux";

import MoviesList from "../../components/MoviesList/MoviesList.js";
class MoviesListContainer extends React.Component {
  componentDidMount() {}

  render() {
    if (this.props.movies.length !== 0) {
      return <MoviesList movies={this.props.movies} />;
    }
    return <div>We could not find anything :c</div>;
  }
}

const mapDispatchToProps = dispatch => ({});

const mapStateToProps = state => ({
  movies: state.movies.results
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MoviesListContainer);

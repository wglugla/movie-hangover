import * as React from 'react';
import { connect } from 'react-redux';

import MoviesList from '../../components/MoviesList/MoviesList';

class MoviesListContainer extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <MoviesList
        movies={this.props.movies}
        isFetching={this.props.isFetching}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  movies: state.movies.results,
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);

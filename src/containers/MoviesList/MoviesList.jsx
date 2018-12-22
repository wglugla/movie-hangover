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
        totalResults={this.props.totalResults}
        totalPages={this.props.totalPages}
      />
    );
  }
}
const mapDispatchToProps = dispatch => ({});
const mapStateToProps = state => ({
  isFetching: state.movies.isFetching,
  movies: state.movies.results, 
  totalResults: state.movies.totalResults,
  totalPages: state.movies.totalPages
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviesListContainer);

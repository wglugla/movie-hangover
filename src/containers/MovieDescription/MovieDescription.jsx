import * as React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { movieInfoActions } from '../../state/ducks/actions';
import { staffActions } from '../../state/ducks/actions';

import MovieDescription from '../../components/MovieDescription/MovieDescription';
import SuggestedMovies from './SuggestedMovies/SuggestedMovies';

class MovieDescriptionContainer extends React.Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.fetchStaff(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <MovieDescription
          currentMovie={this.props.currentMovie}
          director={this.props.director}
          cast={this.props.cast}
          isFetching={this.props.isFetching}
        />
        <SuggestedMovies />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMovie: currentId =>
    dispatch(movieInfoActions.fetchMovieInfoRequest(currentId)),
  fetchStaff: currentId => dispatch(staffActions.fetchStaffRequest(currentId))
});
const mapStateToProps = state => {
  return {
    isFetching: state.currentStaff.isFetching,
    currentMovie: state.currentMovie.result,
    director: state.currentStaff.director,
    cast: state.currentStaff.cast
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(MovieDescriptionContainer)
);

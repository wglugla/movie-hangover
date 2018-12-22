import * as React from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';

import { suggestedMoviesActions } from '../../../state/ducks/actions';

import SuggestedMovies from '../../../components/MovieDescription/SuggestedMovies/SuggestedMovies';

class SuggestedMoviesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchSuggestedMovies(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <SuggestedMovies
          movies={this.props.suggestedMovies}
          isFetching={this.props.isFetching}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchSuggestedMovies: movieId =>
    dispatch(suggestedMoviesActions.fetchSuggestedMoviesRequest(movieId))
});

const mapStateToProps = state => {
  return {
    isFetching: state.suggestedMovies.isFetching,
    suggestedMovies: state.suggestedMovies.results
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SuggestedMoviesContainer)
);

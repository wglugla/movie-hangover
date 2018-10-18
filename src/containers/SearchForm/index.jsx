import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import SearchForm from "../../components/SearchForm";

import { moviesActions } from "../../state/ducks/actions";

export class SearchFormContainer extends Component {
  submit = values => {
    this.props.fetchMovies(values.phrase);
  };

  render() {
    return <SearchForm onSubmit={this.submit} />;
  }
}
const mapDispatchToProps = dispatch => ({
  fetchMovies: phrase => dispatch(moviesActions.fetchMoviesRequest(phrase))
});

const mapStateToProps = state => ({});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(SearchFormContainer)
);

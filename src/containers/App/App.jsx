import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from '../../routes';

export class App extends Component {
  componentDidMount() {}
  render() {
    return <Routes />;
  }
}

const mapStateToProps = state => {
  return {
    movies: state.moviesList
  };
};

export default connect(mapStateToProps)(App);

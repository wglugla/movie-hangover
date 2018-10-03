import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AsyncComponent from '../../components/shared/AsyncComponent';

import AppHeader from '../../components/AppHeader/AppHeader';

export class App extends Component {
  componentDidMount(){};
  render() {
    return (
      <Router>
        <div>
          <Link to='/'> Home </Link>
          <AppHeader />
          <Switch>
            <Route exact component={this.maybeRenderMoviesList} />
          </Switch>
        </div>
      </Router>
    );
  }
  maybeRenderMoviesList = () => {
    if (this.props.movies.length < 1) {
      console.log("Brak");
      return null;
    }
    console.log("Jest");
    return (
      <AsyncComponent
        componentProps={{ movies: this.props.movies }}
        componentProvider={() => 
          import('../../components/MoviesList/MoviesList')
          .then(module => module.MoviesList)
        }
      />
    );
  };
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.moviesList
  }
};


export default connect(mapStateToProps)(App);


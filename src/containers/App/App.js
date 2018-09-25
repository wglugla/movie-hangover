import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import AppHeader from '../../components/AppHeader/AppHeader';
import MoviesList from '../../components/MoviesList/MoviesList';

export class App extends Component {
  componentDidMount(){};
  render() {
    return (
      <Router>
        <div>
          <Link to='/'> Home </Link>
          <Link to='/moviesList'> List </Link>
          <AppHeader />
          <Switch>
            <Route 
              path='/moviesList' 
              render={ () => {
                return <MoviesList movies={this.props.movies} /> 
              }}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    movies: state.moviesList
  }
};


export default connect(mapStateToProps)(App);


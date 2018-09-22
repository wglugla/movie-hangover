import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { testAction } from '../../actions';

import { AppHeader } from '../../components/AppHeader/AppHeader';
import { Movie } from '../../components/Movie/Movie';

export default class App extends Component {
  componentDidMount(){};
  render() {
    return (
      <Router>
        <div>
          <Link to='/'> Home </Link>
          <Link to={`/movie/${this.props.movieName}`}> Movie </Link>
          <Route exact path='/' component={AppHeader} />
          <Route path='/movie/:name' component={Movie} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieName: state.movie
  }
};

const mapDispatchToProps = { testAction };

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

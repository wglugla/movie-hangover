import * as React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home/Home';
import MovieDescription from './containers/MovieDescription/MovieDescription';
import MoviesList from './containers/MoviesList/MoviesList';

export default props => (
  <Router basename={`/movie-hangover`}>
    <Switch>
      <Route exact path={`/`} component={Home} />
      <Route path={`/moviesList`} component={MoviesList} />
      <Route path={`/movie/:id`} component={MovieDescription} />
    </Switch>
  </Router>
);

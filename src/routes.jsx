import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home/Home';
import MovieDescription from './containers/MovieDescription/MovieDescription';
import MoviesList from './containers/MoviesList/MoviesList';

export default props => (
  <div>
    <Router basename={`/movie-hangover`}>
      <div>
        <Route exact component={Home} />
        <Route path={`/moviesList`} component={MoviesList} />
        <Route path={`/movie/:id`} component={MovieDescription} />
      </div>
    </Router>
  </div>
);

import * as React from 'react';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Home from './containers/Home/Home';
import MovieDescription from './containers/MovieDescription/MovieDescription';

export default props => (
  <div>
    <Router basename={`/movie-hangover`}>
      <div>
        <Route exact path='/' component={Home} />
        <Route path={`/movie/:id`} component={MovieDescription} />
      </div>
    </Router>
  </div>
);

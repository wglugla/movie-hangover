import * as React from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Home from "./containers/Home/Home";
export default props => (
  <Router>
    <Switch>
      <Route exact component={Home} />
      <Route path={`/movie/:id`} component={MovieDetails} />
    </Switch>
  </Router>
);
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

import { AppHeader } from '../../components/AppHeader/AppHeader';
import { Movie } from '../../components/Movie/Movie';

export class App extends Component {
  componentDidMount(){};
  render() {
    return (
      <Router>
        <div>
          <Link to='/'> Home </Link>
          <Route exact path='/' component={AppHeader} />
          {/* <Route path='/movie/:name' component={Movie} /> */}
        </div>
      </Router>
    );
  }
}

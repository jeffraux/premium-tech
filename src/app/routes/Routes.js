import React from 'react';
import { Route, Switch } from 'react-router-dom';

import HomePage from '../containers/HomePage';
import AboutPage from '../containers/AboutPage';
import CareersPage from '../containers/CareersPage';


const Routes = (props) => (
  <Switch>
    <div className="app">
      <Route exact path={['/', '/home']} component={HomePage} {...props} />
      <Route exact path='/about' component={AboutPage} {...props} />
      <Route exact path='/careers' component={CareersPage} {...props} />
    </div>
  </Switch>
);

export default Routes;

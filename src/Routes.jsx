import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Landing from './pages/landing';




const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Landing}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
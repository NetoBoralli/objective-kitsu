import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/main';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        {/* <Route path="/character/:id" component={Product} /> */}
      </Switch>
    </BrowserRouter>
)}

export default Routes;
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Character from './pages/character';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route key="main" exact path="/" component={Main} />
        <Route key="character" path="/character/:id" component={Character} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
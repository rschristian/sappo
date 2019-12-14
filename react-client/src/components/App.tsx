import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {Home} from 'components/Home';
import {PageNotFound} from 'components/errors/PageNotFound';


export const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
  );
};

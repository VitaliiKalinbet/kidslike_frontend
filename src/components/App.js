import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import routes from '../routes/routes';
// import Footer from './Footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={routes.AUTH_PAGE.path}
          component={routes.AUTH_PAGE.component}
        />
        <Route
          exact
          path={routes.MAIN_PAGE.path}
          component={routes.MAIN_PAGE.component}
        />
        <Route
          path={routes.PLANNING_PAGE.path}
          component={routes.PLANNING_PAGE.component}
        />
        <Route
          path={routes.AWARDS_PAGE.path}
          component={routes.AWARDS_PAGE.component}
        />
        <Route
          path={routes.CONTACTS_PAGE.path}
          component={routes.CONTACTS_PAGE.component}
        />
        <Redirect to={routes.AUTH_PAGE.path} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

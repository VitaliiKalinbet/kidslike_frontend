import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/routes';
import * as authOperations from '../redux/auth/authOperation';
import Header from './Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';

class App extends Component {
  static propTypes = {
    onRefresh: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { onRefresh } = this.props;
    onRefresh();
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route
            path={routes.AUTH_PAGE.path}
            component={routes.AUTH_PAGE.component}
          />
          <ProtectedRoute
            exact
            path={routes.MAIN_PAGE.path}
            component={routes.MAIN_PAGE.component}
          />
          <ProtectedRoute
            path={routes.PLANNING_PAGE.path}
            component={routes.PLANNING_PAGE.component}
          />
          <ProtectedRoute
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
  }
}

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(authOperations.refresh()),
});

export default connect(null, mapDispatchToProps)(App);

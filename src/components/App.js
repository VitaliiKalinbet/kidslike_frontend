/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import routes from '../routes/routes';
import * as authOperations from '../redux/auth/authOperation';
import Header from './Header/Header';
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import * as globalSelectors from '../redux/global/globalSelectors';
import Loader from './Loader/Loader';

class App extends Component {
  static propTypes = {
    onRefresh: PropTypes.func.isRequired,
    isLoading: PropTypes.bool.isRequired,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isLoading } = this.props;
    return (
      <BrowserRouter>
        {isLoading && <Loader />}
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
const mapStateToProps = store => ({
  isLoading: globalSelectors.getIsLoading(store),
});

const mapDispatchToProps = dispatch => ({
  onRefresh: () => dispatch(authOperations.refresh()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

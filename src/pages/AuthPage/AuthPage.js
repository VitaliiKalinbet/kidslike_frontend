import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, connect } from 'react-redux';
import * as authActions from '../../redux/auth/authActions';
import { refresh } from '../../redux/auth/authOperation';
import styles from './AuthPage.module.css';
import AuthForm from '../../components/AuthForm/AuthForm';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import Footer from '../../components/Footer/Footer';

const AuthPage = props => {
  const { location, setToken } = props;
  const dispatch = useDispatch();
  if (location.search) {
    const token = new URLSearchParams(location.search).get('token');
    if (token) {
      setToken(token);
      dispatch(refresh(token));
    }
  }
  return (
    <>
      <div className={styles.bck__color}>
        <div className={styles.auth__bck}>
          <div className={styles.container}>
            <h2 className={styles.auth__title}>
              Виконуй завдання, отримай класні призи!
            </h2>
            <AuthForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

const mapDispatchToProp = dispatch => ({
  setToken: token => dispatch(authActions.googleToken(token)),
});

AuthPage.propTypes = {
  location: PropTypes.shape({}),
  search: PropTypes.string,
}.isRequired;

export default withAuthRedirect(connect(null, mapDispatchToProp)(AuthPage));

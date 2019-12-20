import axios from 'axios';
import * as authActions from './authActions';
import * as API from '../../services/api';

const setToken = token => {
  axios.defaults.headers.common.Authorization = token;
};

const unsetToken = () => {
  axios.defaults.headers.Authorization = null;
};

export const register = data => dispatch => {
  dispatch(authActions.startRegister());

  API.registerUser(data)
    .then(res => {
      setToken(res.data.token);
      dispatch(authActions.successRegister(res.data));
    })
    .catch(error => dispatch(authActions.errorRegister(error)));
};

export const login = data => dispatch => {
  dispatch(authActions.startLogin());

  API.loginUser(data)
    .then(res => {
      setToken(res.data.token);
      dispatch(authActions.successLogin(res.data));
    })
    .catch(error => dispatch(authActions.errorLogin(error)));
};

export const logout = () => dispatch => {
  dispatch(authActions.startLogout());

  API.logoutUser()
    .then(() => {
      unsetToken();
      dispatch(authActions.successLogout());
    })
    .catch(error => dispatch(authActions.errorLogout(error)));
};

export const refresh = () => (dispatch, getState) => {
  dispatch(authActions.startRefreshUser());
  const { token } = getState().auth;
  if (!token) {
    return;
  }
  setToken(token);

  API.refreshUser()
    .then(res => {
      unsetToken();
      dispatch(authActions.successRefreshUser(res.data.user));
    })
    .catch(error => dispatch(authActions.errorRefreshUser(error)));
};

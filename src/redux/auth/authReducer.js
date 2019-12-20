import { combineReducers } from 'redux';
import types from '../types';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.data.user;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return null;

    case types.SUCCESS_REFRESH_USER:
      return payload.data;

    default:
      return state;
  }
};

const token = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.data.token;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
      return null;

    default:
      return state;
  }
};

const error = (state = null, { type, payload }) => {
  switch (type) {
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return payload.error;

    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.SUCCESS_REFRESH_USER:
      return null;

    default:
      return state;
  }
};

const isLoading = (state = false, { type }) => {
  switch (type) {
    case types.START_REGISTER:
    case types.START_LOGIN:
    case types.START_LOGOUT:
    case types.START_REFRESH_USER:
      return true;

    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
    case types.SUCCESS_REFRESH_USER:
    case types.ERROR_REFRESH_USER:
      return false;

    default:
      return state;
  }
};

const isAuth = (state = false, { type }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
    case types.SUCCESS_REFRESH_USER:
      return true;

    case types.SUCCESS_LOGOUT:
    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.ERROR_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return false;

    default:
      return state;
  }
};

export default combineReducers({
  user,
  token,
  error,
  isLoading,
  isAuth,
});

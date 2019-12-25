import types from '../types';

const tasks = (state = null, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return payload.data.user.tasks;

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return null;

    case types.SUCCESS_REFRESH_USER:
      return payload.data.tasks;

    case types.TOGGLE_CARD:
      return payload.data.tasks.isDone;

    default:
      return state;
  }
};

export default tasks;

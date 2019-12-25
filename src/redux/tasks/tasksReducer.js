import types from '../types';
import totalWeekPlanPoints from '../../utils/totalweekPlanPoints';

const initialState = {
  items: null,
  weekPlanTaskPoints: 0,
};

const tasks = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.SUCCESS_REGISTER:
    case types.SUCCESS_LOGIN:
      return {
        items: payload.data.user.tasks,
        weekPlanTaskPoints: totalWeekPlanPoints(payload.data.user.tasks),
      };

    case types.ERROR_REGISTER:
    case types.ERROR_LOGIN:
    case types.SUCCESS_LOGOUT:
    case types.ERROR_REFRESH_USER:
      return {
        items: null,
        weekPlanTaskPoints: null,
      };

    case types.SUCCESS_REFRESH_USER:
      return {
        items: payload.data.tasks,
        weekPlanTaskPoints: totalWeekPlanPoints(payload.data.user.tasks),
      };

    case types.SUCCESS_CREATE_TASK:
      return payload.tasks;

    default:
      return state;
  }
};

export default tasks;

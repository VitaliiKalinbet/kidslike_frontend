import types from '../types';

export const startCreateTaskAction = () => ({
  type: types.START_CREATE_TASK,
});
export const successCreateTaskAction = data => ({
  type: types.SUCCESS_CREATE_TASK,
  payload: {
    tasks: data,
  },
});
export const errorCreateTaskAction = () => ({
  type: types.ERROR_CREATE_TASK,
});

export const taskPlanningChangeAction = data => ({
  type: types.TASKS_PLANNING_CHANGE,
  payload: {
    data,
  },
});

export const taskPlanningStartRefreshAction = () => ({
  type: types.START_REFRESH_TASKS_PLANNING,
});

export const taskPlanningSuccessRefreshAction = data => ({
  type: types.SUCCESS_REFRESH_TASKS_PLANNING,
  payload: {
    data,
  },
});

export const taskPlanningErrorRefreshAction = () => ({
  type: types.ERROR_REFRESH_TASKS_PLANNING,
});

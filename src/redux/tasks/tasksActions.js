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
  type: types.TASK_PLANNING_CHANGE,
  payload: {
    data,
  },
});

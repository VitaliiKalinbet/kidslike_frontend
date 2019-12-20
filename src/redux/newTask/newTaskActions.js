import types from '../types';

// create note
export const startCreateTaskAction = () => ({
  type: types.START_CREATE_TASK,
});
export const successCreateTaskAction = data => ({
  type: types.SUCCESS_CREATE_TASK,
  payload: {
    task: data,
  },
});
export const errorCreateTaskAction = err => ({
  type: types.ERROR_CREATE_TASK,
  payload: {
    error: err,
  },
});

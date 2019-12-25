import types from '../types';

const task = (isActive, { type, payload }) => {
  switch (type) {
    case types.TASK_PLANNING_CHANGE:
      return payload.isActive;
    default:
      return isActive;
  }
};

export default task;

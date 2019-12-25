import types from '../types';
import { getIsActive } from './tasksSelector';

const task = (state, { type, payload }) => {
  switch (type) {
    case types.TASK_PLANNING_CHANGE:
      return {
        ...state,
        items: getIsActive(state.items, payload),
      };
    default:
      return state;
  }
};

export default task;

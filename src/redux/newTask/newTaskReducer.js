import types from '../types';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.SUCCESS_CREATE_TASK:
      return [...state, payload.task];

    default:
      return state;
  }
};

export default taskReducer;

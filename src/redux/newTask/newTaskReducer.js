import types from '../types';

const taskReducer = (state = [], { type, payload }) => {
  switch (type) {
    // case types.START_CREATE_TASK:
    //   return null;

    case types.SUCCESS_CREATE_TASK:
      return [...state, payload.task];
    // case types.ERROR_CREATE_TASK:
    //   return payload.error;
    default:
      return state;
  }
};

export default taskReducer;

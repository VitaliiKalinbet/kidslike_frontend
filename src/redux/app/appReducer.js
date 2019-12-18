import types from '../types';

const loaderReducer = (state = { isFatching: false }, action) => {
  switch (action.type) {
    case types.APP_FETCHING_START:
      return state;
    case types.EXPENSE_NOTE_DELETE:
      return state;

    default:
      return state;
  }
};
export default loaderReducer;

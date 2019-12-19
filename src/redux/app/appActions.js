import types from '../types';

export const FetchingStart = () => ({
  type: types.APP_FETCHING_START,
});

export const FetchingSuccess = () => ({
  type: types.APP_FETCHING_SUCCESS,
});

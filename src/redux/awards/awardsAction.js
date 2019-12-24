import types from '../types';

export const addAwardsCardAction = awards => ({
  type: types.ADD_AWARDS_SELECTED,
  payload: { awards },
});

export const removeAwardsCardAction = id => ({
  type: types.REMOVE_AWARDS_SELECTED,
  payload: {
    id,
  },
});

const sumAwardsCardAction = points => ({
  type: types.SUM_AWARDS_SELECTED,
  payload: {
    points,
  },
});

export default sumAwardsCardAction;

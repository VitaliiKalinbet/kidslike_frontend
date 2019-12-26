import { combineReducers } from 'redux';
import types from '../types';
import awards from '../../utils/awards';

const awardsReducer = (state = awards, { type, payload }) => {
  switch (type) {
    case types.ADD_AWARDS_SELECTED:
      return [...state, payload.awards];

    case types.REMOVE_AWARDS_SELECTED:
      return state.filter(el => el.id !== payload.id);

    default:
      return state;
  }
};

const awardsSelectedReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.SUM_AWARDS_SELECTED:
      return awards.totalPoints + payload.points;

    default:
      return state;
  }
};

export default combineReducers({
  totalPoints: awardsSelectedReducer,
  arrayAwards: awardsReducer,
});

// import { createSelector } from 'reselect';

export const getActiveDays = store => store.tasks.days.isActive;
export const getTaskPoints = store => store.tasks.taskPoints;

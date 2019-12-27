/* eslint-disable no-underscore-dangle */
// import axios from 'axios';
import { toast } from 'react-toastify';
import {
  startCreateTaskAction,
  successCreateTaskAction,
  errorCreateTaskAction,
} from './tasksActions';
import { postTask } from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '../auth/authSelectors';

toast.configure();

export const createTaskOperation = task => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(startCreateTaskAction());

  postTask(task, token)
    .then(res => {
      dispatch(successCreateTaskAction(res.data.tasks));
      toast.info('🦄 Завдання додано!', {
        autoClose: 2000,
      });
    })
    .catch(() => {
      toast.error('🙈 Завдання не додано! Помилка!');
      return dispatch(errorCreateTaskAction());
    });
};

export const changeTaskTodayOperation = taskId => (dispatch, getState) => {
  const taskInfo = getState().tasks.items.find(el => el._id === taskId);
  // console.log('taskInfo', taskInfo);
  const updateTaskDays = [...taskInfo.days];
  const dayIndex = new Date().getDay() - 1;
  updateTaskDays[dayIndex].isDone = !updateTaskDays[dayIndex].isDone;
  // console.log('updateTaskDays', updateTaskDays);
  // const a = new Date().getDay();
  // console.log(a);
  console.log('updateTaskDays[dayIndex]', updateTaskDays[dayIndex]);
};

export const changeTasksPlanningOperation = taskId => (dispatch, getState) => {
  console.log('start');
  const taskInfo = getState().tasks.items.find(el => el._id === taskId);
  console.log('taskInfo', taskInfo);
  const updateTaskDays = [...taskInfo.days];
  const dayIndex = new Date(1577272964056).getDay() - 1;
  updateTaskDays[dayIndex].isDone = !updateTaskDays[dayIndex].isDone;
  console.log('updateTaskDays', updateTaskDays);
};

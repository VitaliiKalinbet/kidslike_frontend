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

const createTaskOperation = task => (dispatch, getState) => {
  const token = getToken(getState());

  if (!token) return;
  dispatch(startCreateTaskAction());

  postTask(task, token)
    .then(res => {
      dispatch(successCreateTaskAction(res.data.tasks));
      toast.success('Завдання додано');
    })
    .catch(() => {
      toast.error('Завдання не додано помилка');
      return dispatch(errorCreateTaskAction());
    });
};

export default createTaskOperation;

// import axios from 'axios';
import { toast } from 'react-toastify';
import {
  startCreateTaskAction,
  successCreateTaskAction,
  errorCreateTaskAction,
} from './newTaskActions';
import { postTask } from '../../services/api';
import 'react-toastify/dist/ReactToastify.css';
import { getToken } from '../auth/authSelectors';

toast.configure();

const createTaskOperation = task => (dispatch, getState) => {
  dispatch(startCreateTaskAction());
  const token = getToken(getState());

  if (!token) return;

  postTask(task, token)
    .then(res => {
      dispatch(successCreateTaskAction(res.data));
      toast.success('Завдання додано');
    })
    .catch(err => {
      toast.error();
      return dispatch(errorCreateTaskAction(err));
    });
};

export default createTaskOperation;

// import axios from 'axios';
import { toast } from 'react-toastify';
import {
  startCreateTaskAction,
  successCreateTaskAction,
  errorCreateTaskAction,
} from './newTaskActions';
import { postTask } from '../../services/api';

toast.configure();

const createTaskOperation = data => dispatch => {
  dispatch(startCreateTaskAction());

  postTask(data)
    .then(res => {
      toast.success('Завдання додано');
      dispatch(successCreateTaskAction(res.data));
    })
    .catch(err => {
      toast.error();
      return dispatch(errorCreateTaskAction(err));
    });
};

export default createTaskOperation;

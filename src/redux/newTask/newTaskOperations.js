import {
  startCreateTaskAction,
  successCreateTaskAction,
  errorCreateTaskAction,
} from './newTaskActions';

import { postNote } from '../../services/api';

const createTaskOperation = data => dispatch => {
  dispatch(startCreateTaskAction());

  postNote(data)
    .then(res => dispatch(successCreateTaskAction(res.data)))
    .catch(err => dispatch(errorCreateTaskAction(err)));
};

export default createTaskOperation;

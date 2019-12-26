import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'http://kidslike.herokuapp.com/api';

export const setToken = token => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const registerUser = data => axios.post('/auth/signup', data);

export const postTask = (data, token) =>
  axios.post('/tasks', data, setToken(token));

export const loginUser = data => axios.post('/auth/signin', data);

export const logoutUser = () => axios.get('/auth/logout');

export const refreshUser = () => axios.get('/auth/current');

export const submitPointsButton = (data, token) =>
  axios.put('/users/points/userID', data, setToken(token));

export const taskUpdate = (id, task) => {
  axios.put(
    `tasks/${id}`,
    task,
    setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlMDI5MzZkM2M4MmU5MDAyNDQxNDEyZCIsImlhdCI6MTU3NzMwNjY3NiwiZXhwIjoxNTc3OTExNDc2fQ.xYHFRBJCFw3Dt_sRBSd6IQI9Bl53wKsJnZ2AJvzb6TM',
    ),
  );
};

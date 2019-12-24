import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.patch['Content-Type'] = 'application/json';

axios.defaults.baseURL = 'https://kidslike.herokuapp.com/api';

export const registerUser = data => axios.post('/auth/signup', data);

// export const postTask = data => axios.post('/tasks', data);
export const postTask = (task, token) => {
  axios.defaults.headers.common.Authorization = `Bearer${token}`;

  return axios.post('/tasks', task);
};
export const loginUser = data => axios.post('/auth/signin', data);

export const logoutUser = () => axios.get('/auth/logout');

export const refreshUser = () => axios.get('/auth/current');

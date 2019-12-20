import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducers from './auth/authReducer';
import appReducer from './app/appReducer';
import tasksReducer from './tasks/tasksReducer';

const persistAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  auth: persistReducer(persistAuth, authReducers),
  app: appReducer,
  tasks: tasksReducer,
});

export default rootReducer;

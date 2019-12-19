import { combineReducers } from 'redux';
// import authReducers from './auth/authReducer';
import appReducer from './app/appReducer';

const rootReducer = combineReducers({
  app: appReducer,
  // auth: authReducers,
});

export default rootReducer;

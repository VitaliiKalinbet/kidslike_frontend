/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import ReduxThunk from 'redux-thunk';
// import rootReducer from './rootReducer';

const initialStore = {
  auth: {
    user: null,
    token: null,
    error: null,
    isLoading: false,
    isAuth: false,
  },
};

const middleware = [ReduxThunk];
const enhancer = composeWithDevTools(applyMiddleware(...middleware));

const store = createStore(() => initialStore, enhancer);

export default store;

const types = {
  START_CREATE_TASK: 'START_CREATE_TASK',
  SUCCESS_CREATE_TASK: 'SUCCESS_CREATE_TASK',
  ERROR_CREATE_TASK: 'ERROR_CREATE_TASK',

  START_REGISTER: 'START_REGISTER',
  SUCCESS_REGISTER: 'SUCCESS_REGISTER',
  ERROR_REGISTER: 'ERROR_REGISTER',

  START_LOGIN: 'START_LOGIN',
  SUCCESS_LOGIN: 'SUCCESS_LOGIN',
  ERROR_LOGIN: 'ERROR_LOGIN',

  START_LOGOUT: 'START_LOGOUT',
  SUCCESS_LOGOUT: 'SUCCESS_LOGOUT',
  ERROR_LOGOUT: 'ERROR_LOGOUT',

  START_REFRESH_USER: 'START_REFRESH_USER',
  SUCCESS_REFRESH_USER: 'SUCCESS_REFRESH_USER',
  ERROR_REFRESH_USER: 'ERROR_REFRESH_USER',

  // ----------Loader----------------------------
  APP_FETCHING_START: 'APP_FETCHING_START',
  APP_FETCHING_SUCCESS: ' APP_FETCHING_SUCCESS',

  LOADER_START: 'LOADER_START',
  LOADER__STOP: 'LOADER__STOP',

  // -----------NewTaskModal------------------
  NEW_TASK_MODAL_OPEN: 'NEW_TASK_MODAL_OPEN',
  NEW_TASK_MODAL_CLOSED: 'NEW_TASK_MODAL_CLOSED',

  // ----------ModalCongrats-----------------
  MODAL_CONGRATS_OPEN: 'MODAL_CONGRATS_OPEN',
  MODAL_CONGRATS_CLOSED: ' MODAL_CONGRATS_CLOSED',

  // ----------ModalLogout-------------------
  MODAL_LOGOUT_OPEN: 'MODAL_LOGOUT_OPEN',
  MODAL_LOGOUT_CLOSED: 'MODAL_LOGOUT_CLOSED',

  // -----------Set GoogleToken to Store------------
  SET_TOKEN_IN_STORE: 'SET_TOKEN_IN_STORE ',

  // ----------Awards Card-------------------
  ADD_AWARDS_SELECTED: 'ADD_AWARDS_SELECTED',
  REMOVE_AWARDS_SELECTED: 'REMOVE_AWARDS_SELECTED',
  SUM_AWARDS_SELECTED: 'SUM_AWARDS_SELECTED',
  AWARDS_CHANGES_TOGGLE_SELECTED: 'AWARDS_CHANGES_TOGGLE_SELECTED',

  // -------Add name and photo to store-------
  SET_USER_NAME_TO_STORE: 'SET_USER_NAME_TO_STORE',
  SET_USER_AVATAR_TO_STORE: 'SET_USER_AVATAR_TO_STORE',

  // --------Planning page----------------
  TASKS_PLANNING_CHANGE: 'TASKS_PLANNING_CHANGE',
  START_REFRESH_TASKS_PLANNING: 'START_REFRESH_TASKS_PLANNING',
  SUCCESS_REFRESH_TASKS_PLANNING: 'SUCCESS_REFRESH_TASKS_PLANNING',
  ERROR_REFRESH_TASKS_PLANNING: 'ERROR_REFRESH_TASKS_PLANNING',

  // -------Change task's isDone status -------
  CHANGE_CARD_STATUS: 'CHANGE_CARD_STATUS',

  // -------Points Remove -------
  START_REMOVE_POINTS_USER: 'START_REMOVE_POINTS_USER',
  SUCCESS_REMOVE_POINTS_USER: 'SUCCESS_REMOVE_POINTS_USER',
  ERROR_REMOVE_POINTS_USER: 'ERROR_REMOVE_POINTS_USER',
};

export default types;

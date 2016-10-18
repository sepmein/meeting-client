/**
 * Created by Spencer on 2016/10/3.
 */
/**
 * @module action/actionAuth
 * */
// constants
export const TYPES = {};
TYPES.LOGIN = 'LOGIN';
TYPES.LOGIN_FAILURE = 'LOGIN_FAILURE';
TYPES.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
TYPES.REGISTER = 'REGISTER';
TYPES.REGISTER_FAILURE = 'REGISTER_FAILURE';
TYPES.REGISTER_SUCCESS = 'REGISTER_SUCCESS';
TYPES.FORGOT = 'FORGOT';
TYPES.RESET = 'RESET';
TYPES.DELETE = 'DELETE';
TYPES.CHECK_USERNAME = 'CHECK_USERNAME';
TYPES.USER_FOUND = 'USER_FOUND';
TYPES.USER_NOT_FOUND = 'USER_NOT_FOUND';
TYPES.TOGGLE_AUTH_DIALOG = 'TOGGLE_AUTH_DIALOG';
// actions
// define that something happened
export let login = (email, password) => {
  return {
    type: TYPES.LOGIN,
    email,
    password
  };
};

export let loginSuccess = (email, token) => {
  return {
    type: TYPES.LOGIN_SUCCESS,
    email,
    token
  };
};

export let loginFailure = why => {
  return {
    type: TYPES.LOGIN_FAILURE,
    why
  };
};

export let register = (email, password) => {
  return {
    type: TYPES.REGISTER,
    email,
    password
  };
};

export let registerSuccess = (email, token) => {
  return {
    type: TYPES.REGISTER_SUCCESS,
    email,
    token
  };
};

export let registerFailure = why => {
  return {
    type: TYPES.REGISTER_FAILURE,
    why
  };
};

export let forgot = email => {
  return {
    type: TYPES.FORGOT,
    email
  };
};

export let reset = password => {
  return {
    type: TYPES.RESET,
    password
  };
};

export let doDelete = email => {
  return {
    type: TYPES.DELETE,
    email
  };
};

export let checkUsername = email => {
  return {
    type: TYPES.CHECK_USERNAME,
    email
  };
};

export let toggleAuthDialog = () => {
  return {
    type: TYPES.TOGGLE_AUTH_DIALOG
  };
};

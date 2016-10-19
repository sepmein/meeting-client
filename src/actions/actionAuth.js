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
TYPES.CHECK_EMAIL = 'CHECK_EMAIL';
TYPES.TOGGLE_AUTH_DIALOG = 'TOGGLE_AUTH_DIALOG';
TYPES.IS_VALID_EMAIL_INPUT = 'IS_VALID_EMAIL_INPUT';
TYPES.IS_INVALID_EMAIL_INPUT = 'IS_INVALID_EMAIL_INPUT';
TYPES.SET_AS_RETURNING_USER = 'SET_AS_RETURNING_USER';
TYPES.SET_EMAIL_CHECKED = 'SET_EMAIL_CHECKED';
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

export let checkEmail = email => {
  return {
    type: TYPES.CHECK_EMAIL,
    email
  };
};

export let toggleAuthDialog = () => {
  return {
    type: TYPES.TOGGLE_AUTH_DIALOG
  };
};

export let setValidEmailInput = () => {
  return {
    type: TYPES.IS_VALID_EMAIL_INPUT
  };
};

export let setInvalidEmailInput = () => {
  return {
    type: TYPES.IS_INVALID_EMAIL_INPUT
  };
};

export let setAsReturningUser = () => {
  return {
    type: TYPES.SET_AS_RETURNING_USER
  };
};

export let setUsernameChecked = () => {
  return {
    type: TYPES.SET_EMAIL_CHECKED
  };
};


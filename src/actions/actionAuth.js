/**
 * Created by Spencer on 2016/10/3.
 */
'use strict';
/**
 * @module action/actionAuth
 * */
// constants
export const LOGIN = 'LOGIN';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const REGISTER = 'REGISTER';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const FORGOT = 'FORGOT';
export const RESET = 'RESET';
export const DELETE = 'DELETE';
// actions
// define that something happened
export let login = (email, password) => {
  return {
    type: LOGIN,
    email,
    password
  };
};

export let loginSuccess = (email, token) => {
  return {
    type: LOGIN_SUCCESS,
    email,
    token
  };
};

export let loginFailure = why => {
  return {
    type: LOGIN_FAILURE,
    why
  };
};

export let register = (email, password) => {
  return {
    type: REGISTER,
    email,
    password
  };
};
//
// export let registerSuccess = () => {
//
// };
//
// export let registerFailure = () => {
//
// };

export let forgot = email => {
  return {
    type: FORGOT,
    email
  };
};

export let reset = password => {
  return {
    type: RESET,
    password
  };
};

export let doDelete = email => {
  return {
    type: DELETE,
    email
  };
};

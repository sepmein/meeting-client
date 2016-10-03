/**
 * Created by Spencer on 2016/10/3.
 */
'use strict';
/**
 * @module reducer/reducerAuth
 * @see ../action/actionAuth
 * */

// import actions and constants
import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE,
  REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE,
  FORGOT, RESET, DELETE
} from '../actions/actionAuth';

// define initial state
let initialState = {
  user: null,
  token: null,
  isAuthenticating: false,
  why: ''
};

/**
 * The reducer function of the auth part.
 * @param {Object} state - The state of authentication redux.
 * @param {Object} action - The action created by action creator.
 * @return {Object} state - State returned by the reducer.
 * */
export default function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case LOGIN || REGISTER: {
      return {
        isAuthenticating: true,
        user: null,
        token: null
      };
    }
    case LOGIN_SUCCESS || REGISTER_SUCCESS: {
      return {
        isAuthenticating: false,
        user: action.email,
        token: action.token
      };
    }
    case LOGIN_FAILURE || REGISTER_FAILURE: {
      return {
        isAuthenticating: false,
        user: null,
        token: null,
        why: action.why
      };
    }
    case FORGOT: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case RESET: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case DELETE: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    default: {
      return state;
    }
  }
}

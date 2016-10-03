/**
 * Created by Spencer on 2016/10/3.
 */
'use strict';
/**
 * @module reducer/reducerAuth
 * */

// import actions and constants
import {
  LOGIN, REGISTER, FORGOT, RESET, DELETE,
  login, register, forgot, reset, doDelete
} from '../actions/actionAuth';

// define initial state
let initialState = {
  user: null,
  token: null,
  isAuthenticating: false
};

/**
 * The reducer function of the auth part.
 * @param {Object} state - The state of authentication redux.
 * @param {Object} action - The action created by action creator.
 * @return {Object} state - State returned by the reducer.
 * */
export default function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case LOGIN: {
      break;
    }
    case REGISTER: {
      break;
    }
    case FORGOT: {
      break;
    }
    case RESET: {
      break;
    }
    case DELETE: {
      break;
    }
    default: {
      return state;
    }
  }
}

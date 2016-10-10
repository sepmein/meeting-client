/**
 * Created by Spencer on 2016/10/3.
 */
/**
 * @module reducer/reducerAuth
 * @see ../action/actionAuth
 * */

// import actions and constants
import {TYPES} from '../actions/actionAuth';

// define initial state
let initialState = {
  user: null,
  token: null,
  isAuthenticating: false,
  why: '',
  isAuthDialogOpened: false
};

/**
 * The meetingApp function of the auth part.
 * @param {Object} state - The state of authentication redux.
 * @param {Object} action - The action created by action creator.
 * @return {Object} state - State returned by the meetingApp.
 * */
export default function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGIN || TYPES.REGISTER: {
      return {
        isAuthenticating: true,
        user: null,
        token: null
      };
    }
    case TYPES.LOGIN_SUCCESS || TYPES.REGISTER_SUCCESS: {
      return {
        isAuthenticating: false,
        user: action.email,
        token: action.token
      };
    }
    case TYPES.LOGIN_FAILURE || TYPES.REGISTER_FAILURE: {
      return {
        isAuthenticating: false,
        user: null,
        token: null,
        why: action.why
      };
    }
    case TYPES.FORGOT: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case TYPES.RESET: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case TYPES.DELETE: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case TYPES.TOGGLE_AUTH_DIALOG: {
      return Object.assign({}, state, {
        isAuthDialogOpened: !state.isAuthDialogOpened
      });
    }
    default: {
      return state;
    }
  }
}

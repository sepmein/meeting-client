/**
 * Created by Spencer on 2016/10/3.
 */
/**
 * @module reducer/reducerAuth
 * @see ../action/actionAuth
 * */

// import actions and constants
import {TYPES} from "../actions/actionAuth";
// define initial state
let initialState = {
  email: localStorage.getItem('email'),
  token: localStorage.getItem('token'),
  isAuthenticating: false,
  why: '',
  isAuthDialogOpened: false,
  isReturningUser: false,
  emailChecked: false,
  showEmailInputErrorText: false,
  isUserMenuOpened: false
};
/**
 * The meetingApp function of the auth part.
 * @param {Object} state - The state of authentication redux.
 * @param {Object} action - The action created by action creator.
 * @return {Object} state - State returned by the meetingApp.
 * */
export default function reducerAuth(state = initialState, action) {
  switch (action.type) {
    case TYPES.LOGIN: {
      return Object.assign({}, state, {
        isAuthenticating: true,
        token: null
      });
    }
    case TYPES.REGISTER: {
      return Object.assign({}, state, {
        isAuthenticating: true,
        token: null
      });
    }
    case TYPES.LOGIN_SUCCESS: {
      return Object.assign({}, state, {
        isAuthenticating: false,
        email: action.email,
        token: action.token
      });
    }
    case TYPES.REGISTER_SUCCESS: {
      return Object.assign({}, state, {
        isAuthenticating: false,
        email: action.email,
        token: action.token
      });
    }
    case TYPES.LOGIN_FAILURE: {
      return Object.assign({}, state, {
        isAuthenticating: false,
        token: null,
        why: action.why
      });
    }
    case TYPES.REGISTER_FAILURE: {
      return Object.assign({}, state, {
        isAuthenticating: false,
        token: null,
        why: action.why
      });
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
    case TYPES.CHECK_EMAIL: {
      return Object.assign({}, state, {
        isAuthenticating: true
      });
    }
    case TYPES.SET_AS_RETURNING_USER: {
      return Object.assign({}, state, {
        isReturningUser: true
      });
    }
    case TYPES.SET_EMAIL_CHECKED: {
      return Object.assign({}, state, {
        emailChecked: true
      });
    }
    case TYPES.IS_VALID_EMAIL_INPUT: {
      return Object.assign({}, state, {
        showEmailInputErrorText: false
      });
    }
    case TYPES.IS_INVALID_EMAIL_INPUT: {
      return Object.assign({}, state, {
        showEmailInputErrorText: true
      });
    }
    case TYPES.CLICK_BACKWARD: {
      return Object.assign({}, state, {
        emailChecked: false,
        isReturningUser: false
      });
    }
    case TYPES.LOGOUT: {
      return Object.assign({}, state, {
        email: undefined,
        token: undefined,
        isAuthenticating: false,
        why: '',
        isAuthDialogOpened: false,
        isReturningUser: false,
        emailChecked: false,
        showEmailInputErrorText: false
      });
    }
    case TYPES.TOGGLE_USER_MENU: {
      return Object.assign({}, state, {
        isUserMenuOpened: !state.isUserMenuOpened
      });
    }
    default: {
      return state;
    }
  }
}

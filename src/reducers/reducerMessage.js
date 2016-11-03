/**
 * Created by Spencer on 2016/10/30.
 */

import {TYPES} from "../actions/actionMessage";

let initialState = {
  open: false,
  message: ''
};
/**
 * reducer message
 * @param {Object} state - the state of reducer message
 * @param {Object} action - action
 * @return {Object} state - the new state of the reducer
 * */
export default function reducerMessage(state = initialState, action) {
  switch (action.type) {
    case TYPES.SHOW_MESSAGE: {
      return Object.assign(state, {}, {
        message: action.message,
        open: true
      });
    }
    case TYPES.HIDE_MESSAGE: {
      return Object.assign(state, {}, {
        open: false
      });
    }
    default: {
      return state;
    }
  }
}

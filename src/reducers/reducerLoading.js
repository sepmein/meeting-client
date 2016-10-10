/**
 * @module reducers/reducerLoading
 * @see actions/actionLoading
 * */
import {types} from '../actions/actionLoading';
let initialState = {
  isLoading: false
};

/**
 * reducer isLoading
 * @function isLoadingReducer
 * @param {Object} state - state of the loading reducer
 * @param {Object} action - action of loading
 * @return {Object} newState
 * */
export default function isLoadingReducer(state = initialState, action) {
  switch (action.type) {
    case types.STOP_LOADING:
      return {
        isLoading: false
      };
    case types.START_LOADING:
      return {
        lsLoading: true
      };
    default:
      return state;
  }
}

/**
 * Created by Spencer on 2016/11/4.
 */
import {TYPES} from "../actions/actionPlanner";
const initialState = {
  meetingType: 'monthly',
  date: Date.now(),
  room: null
};
/**
 * planner reducer
 * @param {Object} state - the diff state of the planner
 * @param {Object} action - the action
 * @return {Object} state - new state of the app
 * */
export default function reducerPlanner(state = initialState, action) {
  switch (action.type) {
    case TYPES.ADD_PLAN: {
      return Object.assign({}, state, {
        meetingType: action.plan.meetingType,
        date: action.plan.date,
        room: action.plan.room
      });
    }
    default: {
      return state;
    }
  }
}

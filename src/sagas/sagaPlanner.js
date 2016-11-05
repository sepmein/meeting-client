/**
 * Created by Spencer on 2016/11/4.
 */
import {call} from "redux-saga/effects";
import {post} from "../apis/fetch";
import {api} from "../config";
const meetingRootEndPoint = 'http:/' + api.main.rootEndPoint + ':' + api.main.port;
/**
 * saga add plan
 * call post api
 * @param {Object} action - action
 * */
export function * sagaAddPlan(action) {
  let result = yield call(post, meetingRootEndPoint + '/meeting', {
    plan: action.plan
  });
}

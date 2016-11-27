/**
 * Created by Spencer on 2016/11/4.
 */
import {call, put} from "redux-saga/effects";
import {post} from "../apis/fetch";
import {api} from "../config";
import {showMessage} from '../actions/actionMessage';
const meetingRootEndPoint = 'http://' + api.main.rootEndPoint + ':' + api.main.port;

/**
 * saga add plan
 * call post api
 * @param {Object} action - action
 * */
export function * sagaAddPlan(action) {
  console.log(111);
  try {
    console.log(meetingRootEndPoint + '/plan');
    let {type, date, room} = action.plan;
    let response = yield call(post, meetingRootEndPoint + '/plan', {
      type, date, room
    });
    if (response.result.ok) {
      yield put(showMessage('plan added'));
    } else {
      yield put(showMessage('add failed'));
    }
  } catch (e) {
    yield put(showMessage(e.message));
  }
}

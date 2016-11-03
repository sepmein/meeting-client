/**
 * Created by Spencer on 2016/11/3.
 */
import {delay} from "redux-saga";
import {put} from "redux-saga/effects";
import {hideMessage} from "../actions/actionMessage";

/**
 * hide message 4 seconds after show the message
 * */
export function * sagaShowMessage() {
  yield delay(4000);
  console.log('saga show message logged');
  yield put(hideMessage());
}

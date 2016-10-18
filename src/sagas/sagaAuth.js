import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {get, post} from '../apis/fetch';
import {TYPES} from '../actions/actionAuth';
import {api} from '../config';
let authRootEndPoint = 'http://' + api.auth.rootEndPoint + ':' + api.auth.port;
/**
 * check username
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * checkUsername(action) {
  try {
    console.log(action);
    const data = yield call(get, authRootEndPoint + '/' + action.email);
    yield put({type: TYPES.USER_FOUND});
  } catch (e) {
    yield put({type: TYPES.USER_NOT_FOUND, e});
  }
}
/**
 * login
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * login(action) {
  try {
    const data = yield call(post, authRootEndPoint + '/login');
    yield put({type: TYPES.LOGIN_SUCCESS, data});
  } catch (e) {
    yield put({type: TYPES.LOGIN_FAILURE, e});
  }
}
/**
 * register
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * register(action) {
  try {
    const data = yield call(post, authRootEndPoint + '/register');
    yield put({type: TYPES.REGISTER_SUCCESS, data});
  } catch (e) {
    yield put({type: TYPES.REGISTER_FAILURE, e});
  }
}
/**
 * watch check username
 * @yield {Object} put - put effects
 * */
export function * watchCheckUsername() {
  yield takeEvery(TYPES.CHECK_USERNAME, checkUsername);
}

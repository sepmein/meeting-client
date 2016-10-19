import {takeEvery} from 'redux-saga';
import {call, put} from 'redux-saga/effects';
import {get, post} from '../apis/fetch';
import {store} from '../apis/storage';
import {
  TYPES, loginSuccess, loginFailure,
  setValidEmailInput, setInvalidEmailInput,
  setUsernameChecked, setAsReturningUser
} from '../actions/actionAuth';
import {api} from '../config';
let authRootEndPoint = 'http://' + api.auth.rootEndPoint + ':' + api.auth.port;
/**
 * check username
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * checkEmail(action) {
  // regexp check email
  if (/.+@.+\..+/i.test(action.email)) {
    yield put(setValidEmailInput());
    try {
      const result = yield call(get, authRootEndPoint + '/' + action.email);
      yield put(setUsernameChecked());
      yield put(setAsReturningUser());
    } catch (e) {
      console.log(e);
      yield put(setAsReturningUser());
    }
  } else {
    yield put(setInvalidEmailInput());
  }
}

/**
 * login
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * login(action) {
  try {
    const data = yield call(post, authRootEndPoint + '/login',
      {email: action.email, password: action.password});
    yield put(loginSuccess(action.email, data.token));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}
/**
 * login success, store token to localStorage
 * @param {Object} action - action
 * @yield {Object} put - effects
 * */
function * sagaLoginSuccess(action) {
  store('email', action.email);
  store('token', action.token);
}

/**
 * login failure
 * @param {Object} action - action
 * @yield {Object} put - effects
 * */
function * sagaLoginFailure(action) {

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
export function * watchCheckEmail() {
  yield takeEvery(TYPES.CHECK_EMAIL, checkEmail);
  yield takeEvery(TYPES.LOGIN, login);
  yield takeEvery(TYPES.REGISTER, register);
  yield takeEvery(TYPES.LOGIN_SUCCESS, sagaLoginSuccess);
  yield takeEvery(TYPES.LOGIN_FAILURE, sagaLoginFailure);
}

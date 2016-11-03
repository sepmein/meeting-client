import {call, put} from "redux-saga/effects";
import {get, post} from "../apis/fetch";
import {del, store} from "../apis/storage";
import {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  setValidEmailInput,
  setInvalidEmailInput,
  setUsernameChecked,
  setAsReturningUser,
  toggleAuthDialog
} from "../actions/actionAuth";
import {showMessage} from "../actions/actionMessage";
import {api} from "../config";
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
      if (result.ok) {
        yield put(setUsernameChecked());
        yield put(setAsReturningUser());
      } else {
        yield put(setUsernameChecked());
      }
    } catch (e) {
      yield put(showMessage('Error: ' + e.message));
    }
  } else {
    yield put(setInvalidEmailInput());
  }
}

/**
 * sagaLogin
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * sagaLogin(action) {
  try {
    const data = yield call(post, authRootEndPoint + '/login',
      {email: action.email, password: action.password});
    yield put(loginSuccess(action.email, data.token));
  } catch (e) {
    yield put(loginFailure(e.message));
  }
}
/**
 * sagaLogin success, store token to localStorage
 * @param {Object} action - action
 * @yield {Object} put - effects
 * */
export function * sagaLoginSuccess(action) {
  store('email', action.email);
  store('token', action.token);
  yield put(showMessage('login success'));
  yield put(toggleAuthDialog());
}

/**
 * sagaLogin failure
 * @param {Object} action - action
 * @yield {Object} put - effects
 * */
export function * sagaLoginFailure(action) {
  yield put(showMessage(action.why));
}
/**
 * sagaRegister
 * @param {Object} action - action objects
 * @yield {Object} put - put effects
 * */
export function * sagaRegister(action) {
  try {
    const data = yield call(post, authRootEndPoint + '/register',
      {email: action.email, password: action.password});
    yield put(registerSuccess(action.email, data.token));
  } catch (e) {
    yield put(registerFailure(e.message));
  }
}

/**
 * show message after success register
 * @param {Object} action - action object
 * */
export function * sagaRegisterSuccess(action) {
  store('email', action.email);
  store('token', action.token);
  yield put(showMessage('register success'));
  yield put(toggleAuthDialog());
}

/**
 * show why after register failure
 * @param {Object} action - action
 * */
export function * sagaRegisterFailure(action) {
  yield put(showMessage(action.why));
}

/**
 * delete stored token and email, show message
 * */
export function * sagaLogout() {
  del('email');
  del('token');
  yield put(showMessage('log out success'));
}


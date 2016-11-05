import {takeEvery} from "redux-saga";
import {TYPES as AUTH_TYPES} from "../actions/actionAuth";
import {TYPES as MESSAGE_TYPES} from "../actions/actionMessage";
import {TYPES as PLANNER_TYPES} from "../actions/actionPlanner";
import {
  checkEmail,
  sagaLogin,
  sagaLoginSuccess,
  sagaLoginFailure,
  sagaRegister,
  sagaRegisterSuccess,
  sagaRegisterFailure,
  sagaLogout
} from "./sagaAuth";
import {sagaShowMessage} from "./sagaMessage";
import {sagaAddPlan} from "./sagaPlanner";
/**
 * watch
 * @yield {Object} put - put effects
 * */
export default function * sagas() {
  yield takeEvery(AUTH_TYPES.CHECK_EMAIL, checkEmail);
  yield takeEvery(AUTH_TYPES.LOGIN, sagaLogin);
  yield takeEvery(AUTH_TYPES.LOGIN_SUCCESS, sagaLoginSuccess);
  yield takeEvery(AUTH_TYPES.LOGIN_FAILURE, sagaLoginFailure);
  yield takeEvery(AUTH_TYPES.REGISTER, sagaRegister);
  yield takeEvery(AUTH_TYPES.REGISTER_SUCCESS, sagaRegisterSuccess);
  yield takeEvery(AUTH_TYPES.REGISTER_FAILURE, sagaRegisterFailure);
  yield takeEvery(AUTH_TYPES.LOGOUT, sagaLogout);
  yield takeEvery(MESSAGE_TYPES.SHOW_MESSAGE, sagaShowMessage);
  yield takeEvery(PLANNER_TYPES.ADD_PLAN, sagaAddPlan);
}

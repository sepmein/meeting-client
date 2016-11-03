/**
 * Created by Spencer on 2016/10/3.
 */
/**
 * @module combine reducers
 * @see {@link './reducerAuth'}
 * */
import {combineReducers} from "redux";
import auth from "./reducerAuth";
import message from "./reducerMessage";

const meetingApp = combineReducers({
  auth, message
});

export default meetingApp;

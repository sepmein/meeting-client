/**
 * Created by Spencer on 2016/10/3.
 */
/**
 * @module combine reducers
 * @see {@link './reducerAuth'}
 * */
'use strict';
import {combineReducers} from 'redux';
import auth from './reducerAuth';

const meetingApp = combineReducers({
  auth
});

export default meetingApp;

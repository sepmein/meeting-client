/**
 * Created by Spencer on 2016/10/8.
 */
'use strict';
/**
 * @module store
 * @see reducers
 * @export Object store - the redux store object.
 * */
import meetingApp from '../reducers';
import {createStore} from 'redux';
let store = createStore(meetingApp);
export default store;

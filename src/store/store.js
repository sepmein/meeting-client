/**
 * Created by Spencer on 2016/10/8.
 */
/**
 * @module store
 * @see reducers
 * @export Object store - the redux store object.
 * */
import meetingApp from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/sagaLoading';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(meetingApp, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

export default store;

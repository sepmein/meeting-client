/**
 * Created by Spencer on 2016/10/8.
 */
/**
 * @module store
 * @see reducers
 * @export Object store - the redux store object.
 * */
import React from "react";
import meetingApp from "../reducers";
import {createStore, applyMiddleware, compose} from "redux";
import createSagaMiddleware from "redux-saga";
import sagas from "../sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(meetingApp, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));
sagaMiddleware.run(sagas);

export default store;

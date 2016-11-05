import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import injectTapEventPlugin from "react-tap-event-plugin";
import "whatwg-fetch";
import {Provider} from "react-redux";
import store from "./store/store";
injectTapEventPlugin();
/* redux */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

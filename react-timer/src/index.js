import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";
import actionLogger from './middleware';
const store = createStore(reducer,applyMiddleware(actionLogger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

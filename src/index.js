import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App/App";
import * as serviceWorker from "./serviceWorker";
import { rootReducer } from "./Store/Reducers/RootReducer";

import "./index.css";

const enhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logger = state => {
  return next => {
    return action => {
      console.log("Middleware dispatching", action);
      const result = next(action);
      console.log("[MiddleWare next state]", state.getState());
      return result;
    };
  };
};

const store = createStore(rootReducer, enhancers(applyMiddleware(logger, thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

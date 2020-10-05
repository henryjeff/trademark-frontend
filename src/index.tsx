import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import * as serviceWorker from "./serviceWorker";
import { store, persistor, history } from "./store";
import App from "./App";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const target = document.querySelector("#root");

// document.body = "background: red;";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </div>
    </ConnectedRouter>
  </Provider>,
  target
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

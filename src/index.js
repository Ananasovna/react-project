import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/redux-store";
import { Provider } from "react-redux";
import { HashRouter as HashRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerender = (state) => {
  root.render(
    <HashRouter >
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  );
};

rerender(store.getState());



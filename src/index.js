import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { reducer } from "./reducer";
import { Provider } from "react-redux";

const store = createStore(reducer);
console.log(store);
console.log(store.getState(), "in main index");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

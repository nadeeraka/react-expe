// import React from "react";
// import ReactDOM from "react-dom";
import { createStore, combineReducers } from "redux";
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";
import * as serviceWorker from "./serviceWorker";

const defaultItems = [];

const expensesReduser = (state = defaultItems, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const defaultFilter = {
  text: "",
  sortBy: "date",
  startDate: null,
  endDate: null
};

const filterReduser = (state = defaultFilter, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    expences: expensesReduser,
    filter: filterReduser
  })
);

console.log(store.getState());

//ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log("lol");

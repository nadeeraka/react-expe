// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
//ReactDOM.render(<App />, document.getElementById("root"));

//------------------------------------------

import { createStore, combineReducers } from "redux";
import uuid from "uuid";

//A tool to help generate actions, reducers,
// and initial state all together.Quickly create bundles of
// action types, action creators, and reducers with a
// few lines of code.Speedux is an opinionated
//library that allows you to create actions and reducers
//for Redux, automatically.

//actions reducer
const addExpence = (
  discription = "",
  note = "",
  amount = 0,
  createdAt = 0
) => ({
  type: "ADD_EX",
  expences: {
    id: uuid(),
    discription,
    note,
    amount,
    createdAt
  }
});
//expence remove gen
const exRemove = ({ id } = {}) => ({
  type: "EX_RE",
  id
});
// expence reduser
const defaultValues = []; // default state for reduser
const expenceReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case "ADD_EX":
      return [...state, action.expences];
    case "EX_RE":
      return state.filter(res => res.id !== action.id);
    default:
      return state;
  }
};
// default state for reduser
const defaultFilter = {
  sortBy: "date",
  text: "",
  startDate: null,
  endDate: null
};
// filter reduser
const filterReduser = (state = defaultFilter, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
// combine reduser that combain both reduseres
const store = createStore(
  combineReducers({
    expence: expenceReducer,
    filter: filterReduser
  })
);
//subscribe
store.subscribe(() => {
  console.log(store.getState());
});

//dispatch

const rent = store.dispatch(addExpence({ discription: "rent", amount: 1000 }));
const coffee = store.dispatch(
  addExpence({ discription: "coffee", amount: 2000 })
);

console.log(coffee.expences.id);
console.log(rent);

store.dispatch(exRemove({ id: coffee.expences.id }));

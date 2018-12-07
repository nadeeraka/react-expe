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
//----------------------------------------------------
//expences
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
//edit gen
const exEdit = (id, update) => ({
  type: "EX_EDIT",
  id,
  update
});
//--------------------------------------
//filter gen
const setFilterText = (text = "") => ({
  type: "F_TEXT",
  text
});
// sort amount gen
const sortByAmount = () => ({
  type: "SORT_AMOUNT"
});
// sort by date gen
const sortByDate = () => ({
  type: "SORT_DATE"
});
//set start date
const setStartDate = (date = "") => ({
  type: "START_DATE",
  date
});
// end date gen
const setEndDate = (date = "") => ({
  type: "END_DATE",
  date
});
//--------------------------------------
// expence reduser
const defaultValues = []; // default state for reduser
const expenceReducer = (state = defaultValues, action) => {
  switch (action.type) {
    case "ADD_EX":
      return [...state, action.expences];
    case "EX_RE":
      return state.filter(res => res.id !== action.id);
    case "EX_EDIT":
      return state.map(r => {
        if (r.id === action.id) {
          return { ...r, ...action.update };
        }
        return state;
      });
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
    case "F_TEXT":
      //const text: action.text? action.text:''
      return {
        ...state,
        text: action.text
      };
    case "SORT_AMOUNT":
      return {
        ...state,
        sortBy: "Amount"
      };
    case "START_DATE":
      return {
        ...state,
        startDate: action.date
      };
    case "END_DATE":
      return {
        ...state,
        endDate: action.date
      };

    case "SORT_DATE":
      return {
        ...state,
        sortBy: "Date"
      };
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
const car = store.dispatch(addExpence({ discription: "car", amount: 1000 }));
const coffee = store.dispatch(
  addExpence({ discription: "coffee", amount: 2000 })
);

console.log(coffee.expences.id);
console.log(rent.expences.id);

store.dispatch(exRemove({ id: coffee.expences.id }));
store.dispatch(exRemove({ id: car.expences.id }));
store.dispatch(exEdit(rent.expences.id, { amount: 8000 }));
store.dispatch(setFilterText("rent"));
store.dispatch(setFilterText());
sort by amount
sort by date
store.dispatch(sortByAmount());
store.dispatch(sortByDate());
store.dispatch(setStartDate(123));
store.dispatch(setEndDate(567));

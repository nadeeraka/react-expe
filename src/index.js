// import React from "react";
// import ReactDOM from "react-dom";
import {
  createStore,
  combineReducers
} from "redux";
import uuid from 'uuid';
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";

const addExpenses = ({
  dis = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    dis,
    note,
    amount,
    createdAt,
  }
})
const removeExpense = ({
    id
  } = {}) =>
  ({
    type: "REMOVE_EX",
    id,
  })

const expense = [];

const expecesReduser = (state = expense, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [
        ...state, action.expense
      ]
    default:
      return state;
  }
};

const filter = []
const filterReduser = (state = filter, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expecesReduser,
    filter: filterReduser
  })
);
store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(addExpenses({
  dis: 'rent',
  amount: 100
}))
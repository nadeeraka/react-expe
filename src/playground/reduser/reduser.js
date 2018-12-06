import { createStore, combineReducers } from "redux";
import uuid from "uuid";

// expence reduser
const defaultValues = []; // default state for reduser
const expenceReducer = (state = defaultValues, action) => {
  switch (action.type) {
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

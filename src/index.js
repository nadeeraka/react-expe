import { createStore, combineReducers } from "redux";
import uuid from "uuid";

const defaultValues = [];
const expenceReducer = (state = defaultValues, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const defaultFilter = {
  sortBy: "date",
  text: "",
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
    expence: expenceReducer,
    filter: filterReduser
  })
);

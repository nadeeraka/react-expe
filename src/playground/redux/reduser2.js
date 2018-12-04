// import React from "react";
// import ReactDOM from "react-dom";
import {
    createStore,
    combineReducers
} from "redux";
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";

const expenses = [];

const expecesReduser = (state = expenses, action) => {
    switch (action.type) {
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
console.log(store.getState());
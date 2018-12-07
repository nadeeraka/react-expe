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
    {
        discription:'',
        note:'',
        amount:0,
        createdAt:0
    } =
        {

        }
) => {

}
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

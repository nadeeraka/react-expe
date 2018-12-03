import { createStore, combineReducers } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      let inc = action.incrementBY ? action.incrementBY : 1;
      return { count: state.count + inc };
    case "DECREMENT":
      let dec = action.decrementBy ? action.decrementBy : 1;
      return { count: state.count - dec };
    case "SET":
      let set = action.count ? action.count : 0;
      return {
        count: set
      };
    case "RESET":
      return { count: 0 };

    default:
      return state;
  }
});
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({
  type: "INCREMENT",
  incrementBY: 5
});
store.dispatch({
  type: "INCREMENT"
});
store.dispatch({
  type: "DECREMENT"
});
store.dispatch({
  type: "DECREMENT",
  decrementBy: 4
});
store.dispatch({
  type: "RESET"
});
store.dispatch({
  type: "SET",
  count: 5
});
store.dispatch({
  type: "SET"
});

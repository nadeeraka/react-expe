import { createStore, combineReducers } from "redux";

const incrementCount = ({ incrementBY = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBY
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy
});
const setCount = ({ count = 0 } = {}) => ({
  type: "SET",
  count
});

const resetCount = () => ({
  type: "RESET"
});

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBY };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "SET":
      return {
        count: action.count
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

store.dispatch(incrementCount({ incrementBY: 5 }));
store.dispatch(decrementCount({ decrementBy: 5 }));
store.dispatch(setCount({ count: 100 }));
store.dispatch(resetCount());

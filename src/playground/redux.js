import { createStore } from "redux";

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      return {
        count: state.count + 1
      };
    case "DEC":
      return {
        count: state.count - 1
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
      break;
  }
});
console.log(store.getState());
store.dispatch({
  type: "INC"
});
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "RESET"
});
console.log(store.getState());

// second section

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      //const incBy = typeof action.incBY === "number" ? action.incBy : 1;
      const incrementBy =
        typeof action.incrementBy === "number" ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case "DEC":
      const decrementBy =
        typeof action.decrementBy === "number" ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };

    case "SET":
      return {
        count: action.count
      };
    case "RESET":
      return {
        count: 0
      };
    default:
      return state;
      break;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());
store.dispatch({
  type: "INC"
});
console.log(
  store.dispatch({
    type: "INC",
    incrementBy: 5
  })
);
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "INC",
  incBy: 5
});
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "RESET"
});
console.log(
  store.dispatch({
    type: "DEC",
    decrementBy: 10
  })
);

store.dispatch({
  type: "SET",
  count: 101
});
console.log(store.getState());

//ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log("lol");
//

///
// second part
// import React from "react";
// import ReactDOM from "react-dom";
import { createStore } from "redux";
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";

import * as serviceWorker from "./serviceWorker";
const incVal = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INC",
    incrementBy
  };
};
const decVal = ({ decrementBy = 1 } = {}) => {
  return { type: "DEC", decrementBy };
};
const setVal = ({ count } = {}) => {
  return { type: "SET", count };
};
const resetVal = () => ({ type: "RESET" });

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case "INC":
      //const incBy = typeof action.incBY === "number" ? action.incBy : 1;

      return {
        count: state.count + action.incrementBy
      };
    case "DEC":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
      break;
  }
});

store.subscribe(() => {
  console.log(store.getState());
});
console.log(store.getState());
store.dispatch({
  type: "INC"
});
console.log(
  store.dispatch({
    type: "INC",
    incrementBy: 5
  })
);
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "INC",
  incrementBy: 5
});
store.dispatch({
  type: "DEC"
});
store.dispatch({
  type: "RESET"
});
console.log(
  store.dispatch({
    type: "DEC",
    decrementBy: 10
  })
);
store.dispatch({
  type: "SET",
  count: 101
});
store.dispatch(incVal({ incrementBy: 100 }));
store.dispatch(decVal({ decrementBy: 10 }));
store.dispatch(setVal({ count: 9 }));
store.dispatch(resetVal());
console.log(store.getState());

//ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log("lol");

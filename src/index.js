// import React from "react";
// import ReactDOM from "react-dom";
import { createStore } from "redux";
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";

import * as serviceWorker from "./serviceWorker";

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
//ReactDOM.render(App, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
console.log("lol");

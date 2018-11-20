import { createStore } from "redux";
// import "./index.css";
// import App from "./App";
// import Rout from "./routes/AppRoutes";

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

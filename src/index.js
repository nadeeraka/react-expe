import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const Home = () => (
  <div>
    <p>i dont know</p>
  </div>
);
const Add = () => (
  <div>
    <p>
      welcome to add <Link to="/">Go home</Link>
    </p>
  </div>
);
const Edit = () => (
  <div>
    <p>
      welcome to edit <Link to="/">Go home</Link>
    </p>
  </div>
);
const help = () => (
  <div>
    <p>
      welcome to help <Link to="/">Go home</Link>
    </p>
  </div>
);
const notFound = () => (
  <div>
    <p>
      404! <Link to="/">Go home</Link>
    </p>
  </div>
);
const Header = () => (
  <div>
    <h1>Expensify</h1>
    <Link to="/add">Add</Link>
    <Link to="/edit">Edit</Link>
    <Link to="/help">Help</Link>
  </div>
);

const rout = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/help" component={help} />
        <Route component={notFound} />
      </Switch>
    </div>
  </Router>
);
ReactDOM.render(rout, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

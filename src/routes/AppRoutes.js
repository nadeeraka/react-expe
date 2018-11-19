import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

import Home from "../bin/home";
import Add from "../bin/add";
import Edit from "../bin/edit";
import Help from "../bin/healp";
import NotFound from "../bin/notFound";
import Header from "../bin/Header";

const Rout = (
  <Router>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/add" component={Add} />
        <Route path="/edit" component={Edit} />
        <Route path="/help" component={Help} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
export default Rout;

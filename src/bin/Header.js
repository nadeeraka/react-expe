import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const Header = () => (
  <div>
    <h1>Expensify</h1>
    <NavLink to="/add">Add</NavLink>
    <NavLink to="/edit">Edit</NavLink>
    <NavLink to="/help">Help</NavLink>
  </div>
);

export default Header;

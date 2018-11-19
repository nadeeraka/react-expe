import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const Help = () => (
  <div>
    <p>
      welcome to help <Link to="/">Go home</Link>
    </p>
  </div>
);

export default Help;

import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const Edit = () => (
  <div>
    <p>
      welcome to edit <Link to="/">Go home</Link>
    </p>
  </div>
);

export default Edit;

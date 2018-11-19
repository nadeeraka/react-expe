import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  NavLink
} from "react-router-dom";

const Add = () => (
  <div>
    <p>
      welcome to add <Link to="/">Go home</Link>
    </p>
  </div>
);
export default Add;

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import about from "./root/about";
class App extends Component {
  render() {
    return (
      <div>
        <h1>Expensify</h1>
        <div>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={about} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}
const Home = () => (
  <div>
    <p>This is home component</p>
  </div>
);
export default App;

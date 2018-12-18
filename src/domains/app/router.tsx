import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import { ROUTES } from "./routes";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {ROUTES.map((route, index) => (
            <Route key={index} exact path={`/${route.path}`} component={route.component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

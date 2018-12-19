import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";

import { ROUTES } from "./routes";

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          {ROUTES.map(({ path, component }, index: number) => (
            <Route key={index} exact path={`/${path}`} component={component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

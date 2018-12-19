import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { ROUTES } from "./routes";

export default class Routes extends Component {
  public render() {
    return (
      <BrowserRouter>
        <Switch>
          {ROUTES.map(({ path, component }, index: number) => (
            <Route key={index} exact={true} path={`/${path}`} component={component} />
          ))}
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

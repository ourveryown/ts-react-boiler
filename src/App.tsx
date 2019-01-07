import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch } from "react-router-dom";

import { LOGGED_IN_ROUTES, NO_LOGIN_ROUTES } from "./domains/app/routes";

import { IApplicationState } from "./domains/app/root-reducer";

const mapStateToProps = (state: IApplicationState) => ({
  token: state.auth.token
});

interface IStateProps {
  token: string | null;
}

type Props = IStateProps;

class App extends Component<Props> {
  public render() {
    const { token } = this.props;

    const routes = token ? LOGGED_IN_ROUTES : NO_LOGIN_ROUTES;

    return (
      <Switch>
        {routes.map(({ path, component }, index: number) => (
          <Route
            key={index}
            exact={true}
            path={`/${path}`}
            component={component}
          />
        ))}
        <Redirect to="/" />
      </Switch>
    );
  }
}

export default connect(mapStateToProps)(App);

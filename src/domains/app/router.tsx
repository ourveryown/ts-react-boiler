import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import { LOGGED_IN_ROUTES, NO_LOGIN_ROUTES } from "./routes";

import { ApplicationState } from "./root-reducer";

const mapStateToProps = (state: ApplicationState) => ({
  token: state.auth.token
});

interface IStateProps {
  token: string | null;
}

type Props = IStateProps;

class Routes extends Component<Props> {
  public render() {
    const { token } = this.props;

    const routes = token ? LOGGED_IN_ROUTES : NO_LOGIN_ROUTES;

    return (
      <BrowserRouter>
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
      </BrowserRouter>
    );
  }
}

export default connect(mapStateToProps)(Routes);

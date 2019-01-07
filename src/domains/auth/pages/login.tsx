import React, { Component } from "react";
import { compose, graphql } from "react-apollo";
import { LOGIN } from "../graphql";

import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ApplicationAction, IApplicationState } from "../../app/root-reducer";
import * as actions from "../redux/actions";

import { Loader } from "../../../components";

import { AUTH_TOKEN } from "../../../constants/storageTokens";

const mapStateToProps = (state: IApplicationState) => ({
  email: state.auth.data.email,
  loading: state.auth.loading,
  password: state.auth.data.password
});

const mapDispatchToProps = (dispatch: Dispatch<ApplicationAction>) => ({
  loadingAction: (loading: boolean) => dispatch(actions.loadingAction(loading)),
  loginAction: (token: string) => dispatch(actions.loginAction(token)),
  loginInputChanged: (name: string, value: string) =>
    dispatch(actions.loginInputChanged(name, value))
});

interface IDispatchProps {
  loadingAction: typeof actions.loadingAction;
  loginAction: typeof actions.loginAction;
  loginInputChanged: typeof actions.loginInputChanged;
}

interface IStateProps {
  email: string;
  loading: boolean;
  password: string;
}

interface IOtherProps {
  loginMutation: (
    {  }: { variables: { email: string; password: string } }
  ) => Promise<any>;
}

type Props = IStateProps & IDispatchProps & IOtherProps;

class Login extends Component<Props> {
  public onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.loginInputChanged(e.target.name, e.target.value);
  }

  public login = () => {
    const {
      email,
      loadingAction,
      loginAction,
      loginMutation,
      password
    } = this.props;

    const variables = {
      email,
      password
    };

    loadingAction(true);

    loginMutation({ variables })
      .then((res) => {
        loadingAction(false);
        loginAction(res.data.login);
        localStorage.setItem(AUTH_TOKEN, res.data.login.token);
      })
      .catch(() => {
        loadingAction(false);
      });
  }

  public render() {
    const { loading, email, password } = this.props;

    if (loading) {
      return <Loader />;
    }

    return (
      <div>
        <input
          type="text"
          onChange={this.onChange}
          value={email}
          name="email"
        />
        <input
          type="text"
          onChange={this.onChange}
          value={password}
          name="password"
        />
        <div className="btn btn-primary" onClick={this.login}>
          Log In!
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(compose(graphql(LOGIN, { name: "loginMutation" }))(Login));

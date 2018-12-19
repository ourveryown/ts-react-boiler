import React, { Component } from "react";
import { connect } from "react-redux";

import { simpleAction } from "../../app/actions";

const mapStateToProps = (state: any) => ({
  ...state
});

const mapDispatchToProps = (dispatch: any) => ({
  simpleAction: () => dispatch(simpleAction())
});

type Props = {
  simpleAction: () => void;
};

class Login extends Component<Props> {
  simpleAction = () => {
    this.props.simpleAction();
  };

  public render() {
    return (
      <div onClick={this.simpleAction}>
        <pre>{JSON.stringify(this.props)}</pre>Login!
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

import React, { Component } from "react";
import { withNamespaces, WithNamespaces } from "react-i18next";

type Props = WithNamespaces;

class Home extends Component<Props> {
  public render() {
    const { t } = this.props;
    return <div>{t("home")}</div>;
  }
}

export default withNamespaces()(Home);

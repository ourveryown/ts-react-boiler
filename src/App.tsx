import React, { Component } from "react";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./config/api";

// WEB APP
import Router from "./domains/app/router";

class App extends Component {
  public render() {
    return (
      <ApolloProvider client={Client}>
        <Router />
      </ApolloProvider>
    );
  }
}

export default App;

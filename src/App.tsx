import React, { Component } from "react";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./config/api";

// REDUX
import { Provider } from "react-redux";
import store from "./config/store";

// WEB APP
import Router from "./domains/app/router";

class App extends Component {
  public render() {
    return (
      <Provider store={store()}>
        <ApolloProvider client={Client}>
          <Router />
        </ApolloProvider>
      </Provider>
    );
  }
}

export default App;

import React, { ComponentType } from "react";
import ReactDOM from "react-dom";

// STYLES
import "./domains/app/styles/app.scss";

// i18n
import { I18nextProvider } from "react-i18next";
import i18n from "./config/i18n";

// API
import { ApolloProvider } from "react-apollo";
import Client from "./config/api";

// REDUX
import { Provider } from "react-redux";
import configureStore from "./config/store";

// WEB APP
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// SERVICE WORKER
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const render = (Component: ComponentType) => {
  return ReactDOM.render(
    <Provider store={store}>
      <ApolloProvider client={Client}>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <Component />
          </BrowserRouter>
        </I18nextProvider>
      </ApolloProvider>
    </Provider>,
    document.getElementById("root")
  );
};

render(App);

if (module.hot) {
  module.hot.accept("./App", () => {
    const NextApp = require("./App").default;
    render(NextApp);
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

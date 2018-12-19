import React, { Component } from "react";

import Router from "./domains/app/router";
class App extends Component {
  public render() {
    return (
      <div className="App">
        <Router />
      </div>
    );
  }
}

export default App;

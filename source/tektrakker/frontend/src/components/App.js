import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import { Route, HashRouter as Router, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../Store/store";
import Header from "./Layout/Header";
import Assignment from "./Assignment/Assignment";
import NewStudentForm from "./NewStudentForm/NewStudentForm";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container-lg">
              <Switch>
                <Route path="/assignment" component={Assignment} />
                <Route path="/new-student-form" component={NewStudentForm} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));

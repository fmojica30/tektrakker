import React from "react";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "antd/dist/antd.css";

import Store from "./Store/Store";
import Wrapper from "./Components/Layout/Wrapper";
import NewStudentForm from "./Components/InputForms/NewStudentForm";
import NewTeacherForm from "./Components/InputForms/NewTeacherForm";

function App() {
  return (
    <Provider store={Store}>
      <Router>
        <div className="App">
          <Wrapper>
            <Switch>
              <Route path="/new_teacher" component={NewTeacherForm} />
              <Route path="/new_student" component={NewStudentForm} />
              <Route path="/" render={() => <h1>Test</h1>} />
            </Switch>
          </Wrapper>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

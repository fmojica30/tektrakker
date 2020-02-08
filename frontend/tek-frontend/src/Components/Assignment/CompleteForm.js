import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "antd";

import * as actionTypes from "../../Store/Actions/actionTypes";

const CompleteForm = props => {
  return (
    <div>
      <h1>Thank you for completing grades!</h1>
      <Button
        type="primary"
        className="login-form-button"
        size="large"
        htmlType="submit"
        style={{ marginTop: "25px" }}
        onClick={() => {
          props.resetAssignmentForm();
          props.resetAssignment();
        }}
      >
        <Link to="/new_assignment">Another Assignment</Link>
      </Button>
      <Button
        type="primary"
        className="login-form-button"
        size="large"
        htmlType="submit"
        style={{ marginTop: "25px", marginLeft: "30px" }}
        onClick={() => {
          props.resetAssignmentForm();
          props.resetAssignment();
        }}
      >
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  resetAssignmentForm: () => dispatch({ type: actionTypes.RESET_FORM_STATE }),
  resetAssignment: () => dispatch({ type: actionTypes.RESET_ASSIGNMENT_STATE })
});

export default connect(null, mapDispatchToProps)(CompleteForm);

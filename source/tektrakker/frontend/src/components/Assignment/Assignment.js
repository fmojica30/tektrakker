import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import * as actions from "../../Store/actions/assignmentActions";

const Assignment = props => {
  const [assignmentName, setAssignmentName] = useState("");
  const [tek, setTek] = useState("");
  const studentList = null;

  useEffect(() => {
    props.getStudents();
  }, []);

  return (
    <div>
      <h1 className="text-center">New Assignment</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log("works");
        }}
      >
        <div className="form-group">
          <label htmlFor="assignment-name">Assignment Name: </label>
          <input type="text" className="form-control" id="assignment-name" />
        </div>
        <div className="form-group">
          <label htmlFor="tek-selector">Select a TEK group: </label>
          <select className="form-control" id="tek-selector">
            <option>Group 1</option>
            <option>Group 2</option>
            <option>Group 3</option>
          </select>
        </div>
        <table className="table" text-align="center">
          <thead className="thead-light">
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">Name</th>
              <th scope="col">Grade</th>
              <th scope="col">Incomplete</th>
            </tr>
          </thead>
          <tbody>
            {props.students
              ? props.students.map(student => (
                  <tr key={student.id}>
                    <td>{student.student_id}</td>
                    <td>{student.name}</td>
                    <td>
                      <input type="text" />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        className="form-check-input"
                        maxLength={2}
                      />
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
        <button type="onSubmit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  students: state.assignment.students
});

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(actions.get_students())
});

export default connect(mapStateToProps, mapDispatchToProps)(Assignment);

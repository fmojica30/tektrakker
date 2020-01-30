import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import axios from "axios";

import * as actions from "../../Store/actions/assignmentActions";

const Assignment = props => {
  const [assignmentName, setAssignmentName] = useState("");
  const [tek, setTek] = useState("");
  useEffect(() => {
    props.getStudents();
  }, []);

  const submitGradesHandler = event => {
    event.preventDefault();
    const studentFilteredData = [...props.students].map(student => {
      return {
        student: student.id,
        class_id: "test_class",
        assignment_name: assignmentName,
        grade: student.grade
      };
    });
    axios
      .post("/api/upload_grades/", studentFilteredData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload(false);
  };

  const changeGradeHandler = (e, idx) => {
    e.preventDefault();
    const newGrade = e.target.value;
    const lookup = idx.toString();
    props.students[lookup].grade = newGrade;
  };

  return (
    <div>
      <h1 className="text-center">New Assignment</h1>
      <form onSubmit={submitGradesHandler}>
        <div className="form-group">
          <label htmlFor="assignment-name">Assignment Name: </label>
          <input
            type="text"
            className="form-control"
            id="assignment-name"
            onChange={e => {
              e.preventDefault();
              setAssignmentName(e.target.value);
              console.log(assignmentName);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tek-selector">Select a TEK group: </label>
          <select
            className="form-control"
            id="tek-selector"
            onChange={e => {
              e.preventDefault();
              setTek(e.target.value);
              console.log(tek);
            }}
          >
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
              ? props.students.map((student, index) => {
                  return (
                    <tr key={student.id}>
                      <td>{student.id}</td>
                      <td>{student.first_name + " " + student.last_name}</td>
                      <td>
                        <input
                          type="text"
                          onChange={() => changeGradeHandler(event, index)}
                        />
                      </td>
                      <td>
                        <input
                          type="checkbox"
                          className="form-check-input"
                          maxLength={2}
                        />
                      </td>
                    </tr>
                  );
                })
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

import React, { useState } from "react";
import axios from "axios";

const NewSudentForm = props => {
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");

  const submitStudentHandler = () => {
    const studentData = {
      first_name: studentFirstName,
      last_name: studentLastName
    };

    console.log(studentData);
    axios
      .post("/api/students/", studentData)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="card" style={{ marginTop: "120px" }}>
      <div className="card-body">
        <h1 className="text-center">New Student</h1>
        <form onSubmit={submitStudentHandler}>
          <div className="form-group">
            <label htmlFor="student-name">First Name: </label>
            <input
              type="text"
              className="form-control"
              id="student-name"
              onChange={e => {
                e.preventDefault;
                setStudentFirstName(e.target.value);
                console.log(studentFirstName);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="student-id">Last Name: </label>
            <input
              type="text"
              className="form-control"
              id="student-id"
              onChange={e => {
                e.preventDefault;
                setStudentLastName(e.target.value);
                console.log(studentLastName);
              }}
            />
          </div>
          <button type="onSubmit" className="btn btn-secondary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewSudentForm;

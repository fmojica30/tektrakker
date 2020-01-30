import React, { useState } from "react";
import axios from "axios";

const NewSudentForm = props => {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");

  const submitStudentHandler = () => {
    const studentData = {
      name: studentName,
      student_id: studentId
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
            <label htmlFor="student-name">Student Name: </label>
            <input
              type="text"
              className="form-control"
              id="student-name"
              onChange={e => {
                e.preventDefault;
                setStudentName(e.target.value);
                console.log(studentName);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="student-id">Student id: </label>
            <input
              type="text"
              className="form-control"
              id="student-id"
              onChange={e => {
                e.preventDefault;
                setStudentId(e.target.value);
                console.log(studentId);
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

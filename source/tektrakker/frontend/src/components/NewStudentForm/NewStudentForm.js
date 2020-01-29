import React from "react";

const NewSudentForm = props => {
  return (
    <div className="card" style={{ marginTop: "120px" }}>
      <div className="card-body">
        <h1 className="text-center">New Student</h1>
        <form>
          <div className="form-group">
            <label htmlFor="student-name">Student ID: </label>
            <input type="text" className="form-control" id="student-name" />
          </div>
          <div className="form-group">
            <label htmlFor="student-id">Student Name: </label>
            <input type="text" className="form-control" id="student-id" />
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

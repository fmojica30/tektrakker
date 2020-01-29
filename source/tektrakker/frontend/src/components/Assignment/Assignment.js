import React from "react";
import connect from "react-redux";

const Assignment = props => {
  // const studentRows = props.students.map(student => (
  //   <tr>
  //     <td>student.id</td>
  //     <td>student.name</td>
  //     <td>
  //       <input type="text" />
  //     </td>
  //     <td>
  //       <input
  //         type="checkbox"
  //         className="form-check-input"
  //         maxLength={2}
  //       ></input>
  //     </td>
  //   </tr>
  // ));

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
            <tr>
              <td>student.id</td>
              <td>student.name</td>
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
          </tbody>
        </table>
        <button type="onSubmit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Assignment;

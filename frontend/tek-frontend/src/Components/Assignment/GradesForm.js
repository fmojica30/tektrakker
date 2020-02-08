import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Table, Icon, InputNumber } from "antd";

import * as assignmentActions from "../../Store/Actions/assignmentActions";
import * as actionTypes from "../../Store/Actions/actionTypes";

import AssignmentButton from "./Display/AssignmentButton";

const GradesForm = props => {
  const [grades, setGrades] = useState("");

  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name"
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name"
    },
    {
      title: "Grade",
      dataIndex: "value",
      render: (value, row, index) => {
        console.log(index);
        return (
          <InputNumber
            id={index}
            onChange={value => changeGradeHandler(value, index)}
            min={0}
            max={100}
            defaultValue={0}
          />
        );
      },
      key: "id"
    }
  ];

  const changeGradeHandler = (value, idx) => {
    // e.preventDefault();
    const newGrade = value;
    const lookup = idx.toString();
    if (grades === "") {
      setGrades({ ...props.assignment.students });
      setGrades(prevGrades => {
        const newObject = prevGrades[lookup];
        newObject.grade = newGrade;
        return {
          ...prevGrades,
          [lookup]: newObject
        };
      });
      console.log(grades);
    } else {
      setGrades(prevGrades => {
        const newObject = prevGrades[lookup];
        newObject.grade = newGrade;
        return {
          ...prevGrades,
          [lookup]: newObject
        };
      });
      console.log(grades);
    }
  };

  useEffect(() => {
    props.getStudents();
  }, []);

  return (
    <div>
      <form>
        {props.assignment.assignment ? (
          <h1 style={{ marginTop: "15px" }}>
            Input Grades for : {props.assignment.assignment.name}
          </h1>
        ) : (
          <Icon type="loading" />
        )}
        {props.assignment.students !== [] ? (
          <Table
            dataSource={props.assignment.students}
            columns={columns}
            rowKey="id"
          />
        ) : (
          <Table dataSource={null} />
        )}
        <AssignmentButton />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  assignment: state.assignment,
  assignmentForm: state.assignmentForm
});

const mapDispatchToProps = dispatch => ({
  getStudents: () => dispatch(assignmentActions.get_students()),
  changeToComplete: () =>
    dispatch({ type: actionTypes.CHANGE_STEP_TO_COMPLETE })
});

export default connect(mapStateToProps, mapDispatchToProps)(GradesForm);

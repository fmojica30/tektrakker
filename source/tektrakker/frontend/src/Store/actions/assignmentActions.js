import * as actionTypes from "./actionTypes";
import axios from "axios";

export const get_students = () => dispatch => {
  axios
    .get("/api/students")
    .then(res => {
      console.log(res.data);
      dispatch({ type: actionTypes.GET_STUDENTS, payload: res.data });
    })
    .catch(err => {
      console.log(error);
    });
};

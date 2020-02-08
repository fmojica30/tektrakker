import * as actionTypes from "./Actions/actionTypes";
import axios from "axios";

export const get_students = () => dispatch => {
  axios
    .get("http://localhost:8000/api/students")
    .then(res => {
      console.log(res.data);
      dispatch({ type: actionTypes.GET_STUDENTS, payload: res.data });
    })
    .catch(err => {
      console.log(error);
    });
};

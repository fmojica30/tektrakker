import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  name: "",
  tek: "",
  students: []
};

const assignmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS:
      return {
        ...state,
        students: [...action.payload]
      };
    default:
      return state;
  }
};

export default assignmentReducer;

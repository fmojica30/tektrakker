import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  assignment: null,
  students: []
};

const assignmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STUDENTS:
      return {
        ...state,
        students: [...action.payload]
      };
    case actionTypes.SET_ASSIGNMENT:
      return {
        ...state,
        assignment: action.payload
      };
    default:
      return state;
  }
};

export default assignmentReducer;

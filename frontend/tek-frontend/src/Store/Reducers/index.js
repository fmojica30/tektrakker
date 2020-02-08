import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";
import assignmentFormReducer from "./assignmentFormReducer";

export default combineReducers({
  assignment: assignmentReducer,
  assignmentForm: assignmentFormReducer
});

import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";

export default combineReducers({
  assignment: assignmentReducer
});

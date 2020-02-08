import { combineReducers } from "redux";
import assignmentReducer from "./assignmentReducer";
import assignmentFormReducer from "./assignmentFormReducer";
import navReducer from "./navReducer";

export default combineReducers({
  assignment: assignmentReducer,
  assignmentForm: assignmentFormReducer,
  nav: navReducer
});

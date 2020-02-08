import * as actionTypes from "../Actions/actionTypes";

const initialState = {
  nav_state: "home"
};

const navReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_NAV_HOME:
      return {
        nav_state: "1"
      };
    case actionTypes.SET_NAV_NEW_ASSIGNMENT:
      return {
        nav_state: "4"
      };
    case actionTypes.SET_NAV_NEW_STUDENT:
      return {
        nav_state: "2"
      };
    case actionTypes.SET_NAV_NEW_TEACHER:
      return {
        nav_state: "3"
      };
    default:
      return state;
  }
};

export default navReducer;

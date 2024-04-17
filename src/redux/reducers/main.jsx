import { combineReducers } from "@reduxjs/toolkit";

import { useReducer, selectedUserReducers } from "./userReducers";

const reducer = combineReducers({
  user: useReducer,
  selectedUser: selectedUserReducers,
});
 
export default reducer;
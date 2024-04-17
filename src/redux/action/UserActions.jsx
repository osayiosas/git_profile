import { actionTypes } from "../constants/main";

export const setUsers = (users) => {
  return {
    type: actionTypes.SET_USER,
    payload: users,
  };
};

export const setSelectedUser = (user) => {
  return {
    type: actionTypes.SET_SELETED_USER,
    payload: user,
  };
};

export const removeUser = () => {
  return {
    type: actionTypes.REMOVE_SELETED_USER,
  };
};

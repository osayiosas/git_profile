import { actionTypes } from "../constants/main";

const initialState = {
    gitHubUser: [],
}

export const useReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                gitHubUser: payload,
            };
        default:
            return state;
    }
}

export const selectedUserReducers = (state = initialState, {type, payload}) => {
    switch (type) {
        case actionTypes.REMOVE_SELETED_USER:
            return {
                ...state, payload
            };
        case actionTypes.REMOVE_SELETED_USER:
            return {  };
        default:
            return state;
    }
}
import { SET_USER } from "../actions/actionType";

const INITIAL_STATE = {
  user: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

//userReducer is a state updater

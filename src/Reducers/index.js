import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import articleReducer from "./articlereducer";

export const rootReducer = combineReducers({
  userState: userReducer,
  articleState: articleReducer,
});

import { combineReducers } from "redux";

import UserReducer from "./userReducer";

export const rootReducer = combineReducers({
  UserReducer,
});

export type State = ReturnType<typeof rootReducer>;

import { combineReducers } from "redux";
import asyncReducer from "./asyncReducer";

const rootReducer = combineReducers({
  posts: asyncReducer,
});

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
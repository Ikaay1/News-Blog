import { combineReducers } from "redux";
import posts from "./posts.js";

const reducers = combineReducers({
  posts,
});

export default reducers;

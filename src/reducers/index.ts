import activity from "./activity";
import layout from "./layout";
import { combineReducers } from "@reduxjs/toolkit";

export const rootReducer = combineReducers({
  activity,
  layout,
});

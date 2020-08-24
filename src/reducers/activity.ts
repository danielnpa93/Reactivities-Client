import { IActivityRepository } from "../Models/types";
import * as ActivityActions from "../actions/activity";
import { Reducer } from "redux";
import { stat } from "fs";
import { AssertionError } from "assert";
const INITIAL_STATE: IActivityRepository = {
  data: [],
  error: false,
  isLoading: false,
  isSubmmiting: false,
  removingId: undefined,
  currentActivityId: undefined,
};

const activity: Reducer<IActivityRepository> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case ActivityActions.activity_Load.activity_load_async_request.type:
      return { ...state, isLoading: true };
    case ActivityActions.activity_Load.activity_load_success.type:
      return { ...state, isLoading: false, error: false, data: action.payload };
    case ActivityActions.activity_Load.activity_load_error:
      return { ...state, data: [], isLoading: false, error: true };
    case ActivityActions.activity_select.type:
      return { ...state, currentActivityId: action.payload.activityId };
    case ActivityActions.activity_remove.activity_remove_async_request.type:
      return { ...state, removingId: action.payload.activityId };
    case ActivityActions.activity_remove.activity_remove_success.type:
      return {
        ...state,
        removingId: undefined,
        data: state.data.filter((x) => x.id !== action.payload.activityId),
      };
    case ActivityActions.activity_remove.activity_remove_error.type:
      return { ...state, removingId: undefined };
    case ActivityActions.activity_update.activity_update_async_request.type:
    case ActivityActions.activity_create.activity_create_async_request.type:
      return { ...state, isSubmmiting: true };
    case ActivityActions.activity_create.activity_create_success.type:
      return {
        ...state,
        isSubmmiting: false,
        data: [...state.data, action.payload],
      };
    case ActivityActions.activity_update.activity_update_success.type:
      return {
        ...state,
        isSubmmiting: false,
        data: state.data.map((x) => {
          if (x.id === action.payload.id) {
            return { ...x, ...action.payload };
          } else {
            return x;
          }
        }),
      };
    case ActivityActions.activity_update.activity_update_error.type:
    case ActivityActions.activity_create.activity_create_error.type:
      return {
        ...state,
        isSubmmiting: false,
      };
    default:
      return state;
  }
};

export default activity;

import { Reducer } from "redux";
import { ILayout } from "../Models/types";
import * as LayoutActions from "../actions/layout";
const INITIAL_STATE: ILayout = {
  activityContainer: "none",
};

const layout: Reducer<ILayout> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LayoutActions.layout_toogle_activity_container.type:
      return { ...state, activityContainer: action.payload.activityContainer };
    default:
      return state;
  }
};

export default layout;

import { createAction } from "@reduxjs/toolkit";
import { ActionsConstant } from "./contants";
import { activityContainer } from "../Models/types";

export const layout_toogle_activity_container = createAction<{
  activityContainer: activityContainer;
}>(ActionsConstant.LAYOUT_TOOGLE_ACTIVITY_CONTAINER);

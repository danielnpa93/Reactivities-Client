import { createAction } from "@reduxjs/toolkit";
import { IActivity, EditableActivity } from "../Models/types";
import { ActionsConstant } from "./contants";

export const activity_select = createAction<{ activityId?: string }>(
  ActionsConstant.ACTIVITY_SELECT
);

export const activity_update = {
  activity_update_async_request: createAction<EditableActivity>(
    ActionsConstant.ACTIVITY_UPDATE_REQUEST
  ),
  activity_update_success: createAction<IActivity>(
    ActionsConstant.ACTIVITY_UPDATE_SUCCESS
  ),
  activity_update_error: createAction<void>(
    ActionsConstant.ACTIVITY_UPDATE_ERROR
  ),
};

export const activity_create = {
  activity_create_async_request: createAction<EditableActivity>(
    ActionsConstant.ACTIVITY_CREATE_REQUEST
  ),
  activity_create_success: createAction<IActivity>(
    ActionsConstant.ACTIVITY_CREATE_SUCCESS
  ),
  activity_create_error: createAction<void>(
    ActionsConstant.ACTIVITY_CREATE_ERROR
  ),
};

export const activity_remove = {
  activity_remove_async_request: createAction<{ activityId: string }>(
    ActionsConstant.ACTIVITY_REMOVE_REQUEST
  ),
  activity_remove_success: createAction<{ activityId: string }>(
    ActionsConstant.ACTIVITY_REMOVE_SUCCESS
  ),
  activity_remove_error: createAction<void>(
    ActionsConstant.ACTIVITY_REMOVE_ERROR
  ),
};

export const activity_Load = {
  activity_load_async_request: createAction<void>(
    ActionsConstant.ACTIVITY_LOAD_REQUEST
  ),
  activity_load_success: createAction<IActivity[]>(
    ActionsConstant.ACTIVITY_LOAD_SUCCESS
  ),
  activity_load_error: createAction<void>(ActionsConstant.ACTIVITY_LOAD_ERROR),
};

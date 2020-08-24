import { delay, takeLatest, all, call, select } from "redux-saga/effects";
import { takeEvery, put } from "redux-saga/effects";
import {
  activity_Load,
  activity_remove,
  activity_update,
  activity_create,
  activity_select,
} from "../actions/activity";
import { Activities } from "../api/agent";
import { ActionsConstant } from "../actions/contants";
import { layout_toogle_activity_container } from "../actions/layout";

function* asyncLoadActivity(action: any) {
  try {
    const activityData = yield call(Activities.list);

    yield put(activity_Load.activity_load_success(activityData));
  } catch (e) {
    yield put(activity_Load.activity_load_error());
  }
}

function* asyncRemoveActivity(action: any) {
  const { activityId } = action.payload;
  try {
    yield call(Activities.remove, activityId);
    yield put(activity_remove.activity_remove_success({ activityId }));

    const currentId = yield select((state) => state.activity.currentActivityId);

    if (currentId && currentId === activityId) {
      yield put(
        layout_toogle_activity_container({ activityContainer: "none" })
      );
      yield put(activity_select({}));
    }
  } catch (e) {
    yield put(activity_Load.activity_load_error());
  }
}

function* asyncCreateActivity(action: any) {
  try {
    const newActivity = yield call(Activities.create, action.payload);
    yield put(activity_create.activity_create_success(newActivity));
  } catch (e) {
    yield put(activity_create.activity_create_error());
  }
}

function* asyncUpdateActivity(action: any) {
  try {
    yield call(Activities.update, action.payload);
    yield put(activity_update.activity_update_success(action.payload));
  } catch (e) {
    yield put(activity_update.activity_update_error());
  }
}

function* watchActivity() {
  yield takeEvery(ActionsConstant.ACTIVITY_LOAD_REQUEST, asyncLoadActivity);
  yield takeLatest(
    ActionsConstant.ACTIVITY_REMOVE_REQUEST,
    asyncRemoveActivity
  );
  yield takeEvery(ActionsConstant.ACTIVITY_CREATE_REQUEST, asyncCreateActivity);
  yield takeEvery(ActionsConstant.ACTIVITY_UPDATE_REQUEST, asyncUpdateActivity);
}

export { watchActivity };

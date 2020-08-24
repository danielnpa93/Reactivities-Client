import { watchActivity } from "./activity";
import { all } from "redux-saga/effects";

function* rootSaga() {
  yield all([watchActivity()]);
}

export default rootSaga;

import { rootReducer } from "./reducers";
import { configureStore, Store, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import { IActivityRepository, ILayout } from "./Models/types";

const sagaMiddleware = createSagaMiddleware();

const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export interface ApplicationState {
  activity: IActivityRepository;
  layout: ILayout;
}

const store: Store<ApplicationState> = configureStore({
  reducer: rootReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export default store;

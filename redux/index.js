import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { takeEvery, all } from "redux-saga/effects";
import userReducer from "./reducer";
import { UserTypes, UserActions } from "./acitons";
import { fetchUserSaga } from "./sagas";

function* rootSaga() {
  yield all([
    takeEvery(UserTypes.FETCH_USER, fetchUserSaga)
  ])
}
const reducers = combineReducers({
  user: userReducer
})
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
);

// then run the saga
sagaMiddleware.run(rootSaga)

export default store;
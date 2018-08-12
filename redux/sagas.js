import { call, put, takeEvery } from 'redux-saga/effects';
import { UserTypes, UserActions } from "./acitons";
import fetchUserRequest from "./request";

function* fetchUserSaga(action) {
  try {
    const { params } = action;
    const response = yield call(fetchUserRequest, action.params)
    const { ok, data, problem } = response;
    if (ok) {
      yield put(UserActions.fetchUserSuccessful(params, data.results))
    } else {
      yield put(UserActions.fetchUserError(problem))
    }
  } catch (error) {
    yield put(UserActions.fetchUserError(JSON.stringify(error)))
  }
}

export { fetchUserSaga }
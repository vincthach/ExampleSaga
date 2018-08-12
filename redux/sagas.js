import { call, put, takeEvery } from 'redux-saga/effects';
import { UserTypes, UserActions } from "./acitons";
import fetchUserRequest from "./request";

function* fetchUserSaga(action) {
  try {
    const { params } = action;
    const response = yield call(fetchUserRequest, action.params)
    console.log(response);
    const { status, data } = response;

    yield put(UserActions.fetchUserSuccessful(params, data.results))

  } catch (error) {
    yield put(UserActions.fetchUserError(JSON.stringify(error)))
  }
}

export { fetchUserSaga }
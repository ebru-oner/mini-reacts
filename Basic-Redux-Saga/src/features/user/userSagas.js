import { call, takeLatest, put } from "redux-saga/effects";
import { login, loginFail, logout, loginSuccess } from "./userSlice";
import { loginUser, logoutUser } from "./userApis";

function* handleLogin(action) {
  const user = yield call(loginUser, action.payload);
  if (user) {
    yield put(loginSuccess(user));
  } else {
    yield put(loginFail(action));
  }
}

function* handleLogout(action) {
  yield call(logoutUser, action.payload);
}

export default function* userSagas() {
  yield takeLatest(login.type, handleLogin);
  yield takeLatest(logout.type, handleLogout);
}

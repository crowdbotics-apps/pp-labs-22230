import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* signup_post_api_v1_signup_readWorker(action) {
  try {
    const result = yield call(apiService.signup_post_api_v1_signup_read, action)
    yield put(actions.signup_post_api_v1_signup_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.signup_post_api_v1_signup_readFailed(err, action))
  }
}
function* signup_post_api_v1_signup_readWatcher() {
  yield takeEvery(
    types.SIGNUP_POST_API_V1_SIGNUP_READ,
    signup_post_api_v1_signup_readWorker
  )
}
export default function* rootSaga() {
  const sagas = [signup_post_api_v1_signup_readWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}

import * as types from "./constants"

const initialState = { signup: [] }

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.SIGNUP_POST_API_V1_SIGNUP_READ:
    case types.SIGNUP_POST_API_V1_SIGNUP_READ_SUCCEEDED:
    case types.SIGNUP_POST_API_V1_SIGNUP_READ_FAILED:
      return Object.assign({}, state, {
        signup: [...state.signup, action.response]
      })
    default:
      return state
  }
}

import * as ActionTypes from "../Actions/ActionTypes";

const initialState = {
  loading: false,
  isSignedIn: false,
  idToken: "" // it will be provided from the signIn service
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SIGN_IN_START:
      return {
        ...state,
        loading: true
      };
    case ActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        loading: false,
        isSignedIn: true
      };
    case ActionTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isSignedIn: false
      };
    default:
      return state;
  }
}

import * as firebase from "firebase";
import { SIGN_IN_SUCCESS, SIGN_IN_FAILURE, SIGN_IN_START } from "./ActionTypes";

const signInStart = () => ({
  type: SIGN_IN_START
});

const signInSuccess = result => ({
  type: SIGN_IN_SUCCESS,
  payload: result
});

const signInFailure = error => ({
  type: SIGN_IN_FAILURE,
  payload: error
});

export const signIn = data => {
  const { password, email } = data;
  window.console.log(data);
  return dispatch => {
    dispatch(signInStart());
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(result => {
        console.log('aaa', result);
        dispatch(signInSuccess(result));
        // window.console.log('success', email, this.state.email);
      })
      .catch((error) => {
        dispatch(signInFailure(error))
        // window.console.log('error', email, password);
      });
  };
};

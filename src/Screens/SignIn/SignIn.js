import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import * as firebase from "firebase";

import * as ROUTES from "../../Constants/Routes";
import SignInForm from "../../Components/SignInForm/SignInForm";
import { FirebaseConfig } from "../../Components/Firebase/Firebase";
import { signIn } from "../../Store/Actions/AuthActions";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", error: null };
  }

  initialize = !firebase.apps.length
    ? firebase.initializeApp(FirebaseConfig)
    : firebase.app();
  fireStore = firebase.firestore;

  componentDidUpdate(prevProps) {
    if (
      this.props.isSignedIn &&
      this.props.isSignedIn !== prevProps.isSignedIn
    ) {
      this.goToHome();
    }
  }

  goToHome = () => this.props.history.push(ROUTES.HOME);

  onSubmit = data => {
    this.props.signIn(data);
  };

  render() {
    return <SignInForm onSubmit={this.onSubmit} />;
  }
}

const mapStateToProps = state => ({
  isSignedIn: state.authReducer.isSignedIn
});

export default connect(mapStateToProps, { signIn: signIn })(withRouter(SignIn));

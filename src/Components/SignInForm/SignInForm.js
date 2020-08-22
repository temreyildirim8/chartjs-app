import React from "react";
import { useForm } from "react-hook-form";

import "./SignInFormStyles.css";

const SignInForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmitHandler = data => {
    onSubmit(data);
  };

  return (
    <div className="sign_in_form">
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className="hedwig_image">
          <img src={require("../../Assets/Img/hedwig-icon.png")} alt="" />
        </div>
        <div className="title">
          <h2> Please sign in</h2>
        </div>
        <input
          name="email"
          ref={register({ required: true })}
          placeholder="E-mail address"
        />
        <input
          name="password"
          type="password"
          ref={register({ required: true, maxLength: 10 })}
          placeholder="Password"
        />
        {(errors.password || errors.email) && <p>These fields are required</p>}
        <input type="submit" value="Sign In" />
        <div className="copyright">
          <h3> Hedwig © 2020</h3>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
